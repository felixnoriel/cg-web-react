import { Component } from 'react'

import config from '../helpers/config';

import { getBurgerMenu,
         getArchive } from '../store/actions/actions';

import mapComponentToPostType from './_custom';

class Index extends Component{

  constructor(props){
    super(props)
  }

  /*
    params pathname = url
    query - quer string section of url
    asPath - string of actual path
    req - http request (server only)
    res - http response (server only)
    jsonPageRes - fetch response ( client only)
    err - error object
  */

  static async getInitialProps ({ req, reduxStore, pathname, params, query }) {

    // All data that will be used for SSR (needed for SEO) needs to be fetch here
    // fetch burger menu
    await reduxStore.dispatch(getBurgerMenu());

    // just for testing, implement later on
    await reduxStore.dispatch( getArchive("menu-category", "menu", "menu", null, {parent: 0}) );
    await reduxStore.dispatch( getArchive("events-category", "events", "events", null, {parent: 0}) );
    await reduxStore.dispatch( getArchive("location", "location", "location", null, null) );

    return { posttype: 'home' };
  }

  //third to be called
  render(){
    const { posttype } = this.props;
    return ( mapComponentToPostType(posttype) )
  }
}

export default Index;
