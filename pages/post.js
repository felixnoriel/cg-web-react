import { Component } from 'react'

// import {  } from '../actions/action'

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

    /* LOGIC HERE TO GET DATA BASED FROM A POST TYPE */
    // await reduxStore.dispatch(getProjects({per_page:99, order_by: 'menu_order'}))

    // if post type 
    // check if there's a slug
    // if no slug check if it's a post type category

    // else not post type
    // check if a page

    if (config.PostTypes[posttype] ){

    }
    if (config.PostTypeCategories[posttype] ){
      
    }
    return { posttype: posttype };
  }

  render(){
    const { posttype } = this.props;
    console.log('posttype: ' + posttype);
    return ( mapComponentToPostType(posttype) )
  }
}

export default Post