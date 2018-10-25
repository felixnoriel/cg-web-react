import { Component } from 'react'

import config from '../helpers/config';
// import { getArchive } from '../store/actions/action'

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
    // await reduxStore.dispatch(getExperiences({per_page: 3}))
    // await reduxStore.dispatch(getProjects({per_page:3, order_by: 'menu_order'}))

    return { posttype: 'home' };
  }

  //third to be called
  render(){
    const { posttype } = this.props;
    return ( mapComponentToPostType(posttype) )
  }
}

export default Index;
