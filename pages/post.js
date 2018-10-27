import { Component } from 'react'

import { getBurgerMenu,
         getArchive,
         getPost,
         getPage,
         getCategoriesByPostType,
         setWebSettings,
        } from '../store/actions/actions';

import config from '../helpers/config';
import mapComponentToPostType from './_custom';

class Post extends Component{

  /*
    params pathname = url
    query - query string section of url
    asPath - string of actual path
    req - http request (server only)
    res - http response (server only)
    jsonPageRes - fetch response ( client only)
    err - error object
  */

  static async getInitialProps ({ req, reduxStore, pathname, params, query, asPath }) {
    const posttype = query.posttype;
    let posttypeObj = posttype;
    if( !posttype || posttype === 'favicon.ico'){ return false; }

    /* NOTES
       - All data that will be used for SSR (needed for SEO) needs to be fetch here
       ${posttype}-category is slug name of category when you register taxonomy for that post type
    */
    
    // fetch burger menu
    await reduxStore.dispatch(getBurgerMenu());

    if ( config.PostTypes.indexOf(posttype) > -1 ) { // first layer URL is a post type
      
      if(posttype === "menu"){ 
        // menu is configured to get their categories NOT their item unless it's a subcategory

        let category = query.category;
        let subCategory = query.slug;
        let slug = query.twoslug; // check three slug as well if it exists later on - subcategory might be two layers
        const categoryName = `${posttype}-category`;
        const urlSettings = {
          posttype: posttype,
          category: category,
          subCategory: subCategory,
          slug: slug
        };
        let viewSettings = {}; // to be merged to globalWebSettings later
        
        if(slug){  // get post -> /menu/food/main/cheeseburger
          await reduxStore.dispatch(getPost(posttype, slug));
          
           // set view settings
          viewSettings = { viewType: 'post', viewBy: slug, };

        }else if(subCategory){  // get third layer list ITEMS of post type -> /menu/food/main
          const categoryChecker = await checkCategoryIfExists(posttype, subCategory);
          if(categoryChecker && categoryChecker.id > 0){
              await reduxStore.dispatch( getArchive(posttype, posttype, category, subCategory, { [categoryName]: categoryChecker.id }) );

              // set view settings
              viewSettings = { viewType: 'archive', viewBy: category, viewSubType: "items", };
          }
        
        }else if(category){ // get second layer list CATEGORY of post type -> /menu/food
          const categoryChecker = await checkCategoryIfExists(posttype, category);
          if(categoryChecker && categoryChecker.id > 0){
              // /menu/food/main -> returns list of categories of main
              await reduxStore.dispatch( getArchive(categoryName, posttype, category, subCategory, {parent: categoryChecker.id }) );

              // set view settings
              viewSettings = { viewType: 'archive', viewBy: categoryChecker.slug, viewSubType: "category", };
          }
          
        }else{ // get first layer list CATEGORY of post type -> /menu
          await reduxStore.dispatch( getArchive(categoryName, posttype, posttype, subCategory, { parent: 0 }) );

          // set view type in global settings
          await reduxStore.dispatch(setWebSettings({ viewType: 'archive', viewBy: posttype }));
        }

        // set global settings
        const finalSettings = Object.assign({}, urlSettings, viewSettings); // merge the two settings
        await reduxStore.dispatch(setWebSettings(finalSettings));

      

      }else{ /* start to: post type !== "menu"  */
        // other post types are configured to get ITEMS only and not its categories
        const category = query.category;
        const slug = query.slug;
        const twoslug = query.twoslug; // fourth layer URL -> /location/nsw/cbd/darlingharbour -> implement this later on
        const categoryName = `${posttype}-category`;
        const urlSettings = {
          posttype: posttype,
          category: category,
          subCategory: null, // change if exists
          slug: slug
        };

        let viewSettings = {}; // to be merged to globalWebSettings later

        if(slug){ // eg: /location/nsw/castle-hill, /events/birthday/package-1
          await reduxStore.dispatch(getPost(posttype, slug));

          // set view type in global settings
          await reduxStore.dispatch(setWebSettings({ viewType: 'post', viewBy: slug }));
           // set view settings
          viewSettings = { viewType: 'post', viewBy: slug, };

        }else if(category){ //eg: /location/nsw, /events/birthday

          const categoryChecker = await checkCategoryIfExists(posttype, category);
          if(categoryChecker && categoryChecker.id > 0){
              await reduxStore.dispatch( getArchive(posttype, posttype, category, null, { [categoryName]: categoryChecker.id }) );
          }
          // set view settings
          viewSettings = { viewType: 'archive', viewBy: categoryChecker.slug, viewSubType: "items", };

        }else{ // eg: /location, /events

          // set view settings
          viewSettings = { viewSubType: "items", viewType: 'archive', viewBy: posttype, };
          if(posttype === "events"){
            // events return a list of its CATEGORY and not items
            await reduxStore.dispatch( getArchive(categoryName, posttype, posttype, null, {parent: 0}) );
            viewSettings.viewSubType = "category";
            
          }else{
            // other post types returns a list of ITEMS based from post type
            await reduxStore.dispatch( getArchive(posttype, posttype, posttype, null, null) );
          }

        }

        // set global settings
        const finalSettings = Object.assign({}, urlSettings, viewSettings); // merge the two settings
        await reduxStore.dispatch(setWebSettings(finalSettings));

      }
    
    } else {  /** start: not a post type, might be a page or search **/
      if(posttype === "search"){
        // redirect to DefaultContainer -> Search component
        // Search results will be async and doesn't need to be SEO
        await reduxStore.dispatch(setWebSettings({posttype: 'search', searchText: query.q}));
        return { posttype: 'search' };
      }

      const slug = posttype;
      await reduxStore.dispatch( getPage(slug) ); // posttype = first layer of URL; assume it's the slug of the page
      const page = reduxStore.getState().settings.page; // check if there was a page object returned from the API request 
      posttypeObj = 'page';

      // set global settings based on url mapping
      await reduxStore.dispatch(setWebSettings({posttype: posttype, category: category, subCategory: null, slug: slug,
                                                viewType: 'page', viewBy: slug}));
      
      if( !page || page === null || page === undefined || page.length <= 0 ){ // if no page object was returned, return error 404
        return { posttype: 'error' };
      }
    }

    return { posttype: posttypeObj }; // return a post type object to check what kind of component to return below
  }

  render(){
    const { posttype } = this.props;
    return ( mapComponentToPostType(posttype) )
  }
}

// this will return the ID of category if it exists
async function checkCategoryIfExists(posttype, category){
  const categories = await getCategoriesByPostType(`${posttype}-category`);
  for(const cat of categories){
    if(cat.slug === category){
      return cat;
      break;
    }
  }

  return 0;
}

export default Post