import { Component } from 'react'

import { getBurgerMenu,
         getCategoryArchive,
         getArchive,
         getPost,
         getCategoriesByPostType,
        } from '../store/actions/actions';

import config from '../helpers/config';
import mapComponentToPostType from './_custom';

class Post extends Component{

  /*
    params pathname = url
    query - quer string section of url
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

    // All data that will be used for SSR (needed for SEO) needs to be fetch here
    
    // fetch burger menu
    await reduxStore.dispatch(getBurgerMenu());

    if ( config.PostTypes.indexOf(posttype) > -1 ) { // first layer URL is a post type
      
      if(posttype === "menu" || posttype === "events"){ // menu post type has different configuration because of the URL layers. eg: /menu/food/appetiser/spring-roll OR /menu/food/appetiser/morning/breadsticks
        console.log(query);

        let category = query.category;
        let subCategory = query.slug;
        let slug = query.twoslug; // check three slug as well if it exists later on - subcategory might be two layers

        if (posttype === "events") { // events is only three layers -> 
          category = query.category;
          slug = query.slug; // check three slug as well if it exists later on - subcategory might be two layers
        }

        if(slug){ 

          // get post -> /menu/food/main/cheeseburger
          await reduxStore.dispatch(getPost(posttype, {slug: slug}));
        
        }else if(subCategory){ 
          console.log( 'subCategory:' + subCategory );
          // get third layer list ITEMS of post type -> /menu/food/main
          const categories = await getCategoriesByPostType(`${posttype}-category`);
          for(const cat of categories){
            if(cat.slug === subCategory){
              console.log(cat.slug);
              await reduxStore.dispatch( getCategoryArchive(posttype, { category: category, 'menu-category': cat.id }) );
              break;
            }
          }
        
        }else if(category){ // this would look like 

          // get second layer list CATEGORY of post type -> /menu/food
          const categories = await getCategoriesByPostType(`${posttype}-category`);
          for(const cat of categories){
            if(cat.slug === category){
              await reduxStore.dispatch( getCategoryArchive('menu-category', {category: 'list', parent: cat.id }) );
              break;
            }
          }
          
        }else{
          // get first layer list CATEGORY of post type -> /menu
          await reduxStore.dispatch( getCategoryArchive('menu-category', { category: 'list', parent: 0}) );
        }

      }else{ // other post types are configured in three layers only. eg: /events -> /events/birthday -> /events/birthday/package-1


      }
    
    } else { 
      // Not a post type - check if page
      await reduxStore.dispatch( getPost('pages', {slug: posttype }) ); // posttype = first layer of URL; assume it's the slug of the page
      const pageObj = reduxStore.getState().settings.pageObj; // check if there was a page object returned from the API request 
      posttypeObj = 'page';
      if( !pageObj ){ // if no page object was returned, return error 404
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

export default Post