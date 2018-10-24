import { Component } from 'react'
import { connect } from 'react-redux'

import config from '../helpers/config';
import { getExperiences, getProjects, getBlogList } from '../actions/action'

import MainContainer from '../containers/MainContainer'
import Intro from '../components/Intro';
import CareerTimeline from '../components/CareerTimeline';
import ProjectList from '../components/ProjectList';
import BlogList from '../components/BlogList';
import Skills from '../components/Skills';

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
    await reduxStore.dispatch(getExperiences({per_page: 3}))
    await reduxStore.dispatch(getProjects({per_page:3, order_by: 'menu_order'}))
    await reduxStore.dispatch(getBlogList({per_page:3, order_by: 'menu_order'}))

    return { };
  }

  //third to be called
  //
  render(){
    const { experiences, projects, blogList } = this.props.reducer;
    return (<MainContainer>
              <Intro />
              <Skills />
              <CareerTimeline indexPage={true} experiences={experiences}/>
              <ProjectList indexPage={true} projects={projects} />
              <BlogList indexPage={true} blogList={blogList} />
            </MainContainer>)
  }
}

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Index);
