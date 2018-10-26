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
    if(posttype === 'favicon.ico' || !posttype ){ return false; }

    /* NOTES
       - All data that will be used for SSR (needed for SEO) needs to be fetch here
       ${posttype}-category is slug name of category when you register taxonomy for that post type
    */
    
    // fetch burger menu
    await reduxStore.dispatch(getBurgerMenu());

    if ( config.PostTypes.indexOf(posttype) > -1 ) { // first layer URL is a post type
      
      if(posttype === "menu" || posttype === "events"){ 
        // menu and events are configured to get their categories NOT their item unless it's a subcategory

        let category = query.category;
        let subCategory = query.slug;
        let slug = query.twoslug; // check three slug as well if it exists later on - subcategory might be two layers
        const categoryName = `${posttype}-category`;

        // set global settings based on url mapping
        await reduxStore.dispatch(setWebSettings({posttype: posttype, category: category, subCategory: subCategory, slug: slug}));

        if (posttype === "events") { // events is only three layers -> /events/wedding/package-1
          category = query.category;
          slug = query.slug; // check three slug as well if it exists later on - subcategory might be two layers
        }

        
        if(slug){ 
          // get post -> /menu/food/main/cheeseburger
          await reduxStore.dispatch(getPost(posttype, slug));
        
        }else if(subCategory){ 
          // get third layer list ITEMS of post type -> /menu/food/main
          const categoryId = await getCategoryId(posttype, subCategory);
          if(categoryId > 0){
              await reduxStore.dispatch( getArchive(posttype, posttype, category, subCategory, { [categoryName]: categoryId }) );
          }
        
        }else if(category){ // this would look like 

          // get second layer list CATEGORY of post type -> /menu/food
          const categoryId = await getCategoryId(posttype, category);
          if(categoryId > 0){
              await reduxStore.dispatch( getArchive(categoryName, posttype, category, subCategory, {parent: categoryId }) );
          }
          
        }else{
          // get first layer list CATEGORY of post type -> /menu
          await reduxStore.dispatch( getArchive(categoryName, posttype, posttype, subCategory, { parent: 0 }) );
        }

      }else{ // other post types are configured to get ITEMS only and not its categories
        const category = query.category;
        const slug = query.slug;
        const twoslug = query.twoslug; // fourth layer URL -> /location/nsw/cbd/darlingharbour -> implement this later on
        const categoryName = `${posttype}-category`;

        // set global settings based on url mapping
        await reduxStore.dispatch(setWebSettings({posttype: posttype, category: category, subCategory: null, slug: slug}));

        if(slug){
          await reduxStore.dispatch(getPost(posttype, slug));

        }else if(category){
          const categoryId = await getCategoryId(posttype, category);
          if(categoryId > 0){
              await reduxStore.dispatch( getArchive(posttype, posttype, category, null, { [categoryName]: categoryId }) );
          }

        }else{
          await reduxStore.dispatch( getArchive(posttype, posttype, posttype, null, null) );
        }

      }
    
    } else { 
      // Not a post type - check if page
      const slug = posttype;
      await reduxStore.dispatch( getPage(slug) ); // posttype = first layer of URL; assume it's the slug of the page
      const page = reduxStore.getState().settings.page; // check if there was a page object returned from the API request 
      posttypeObj = 'page';
      if( !page || page === null || page === undefined || page.length <= 0 ){ // if no page object was returned, return error 404
        return { posttype: 'error' };
      }
      // set global settings based on url mapping
        await reduxStore.dispatch(setWebSettings({posttype: posttype, category: category, subCategory: null, slug: slug}));
    }

    return { posttype: posttypeObj }; // return a post type object to check what kind of component to return below
  }

  render(){
    const { posttype } = this.props;
    return ( mapComponentToPostType(posttype) )
  }
}

// this will return the ID of category if it exists
async function getCategoryId(posttype, category){
  const categories = await getCategoriesByPostType(`${posttype}-category`);
  for(const cat of categories){
    if(cat.slug === category){
      return cat.id;
      break;
    }
  }

  return 0;
}

export default Post