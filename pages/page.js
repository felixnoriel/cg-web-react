import { PureComponent } from 'react'
import { connect } from 'react-redux'

import { getProjects, getProjectsByCareerId, getProject,
         getExperiences, getExperience,
         getBlogList, getBlog } from '../actions/action'
import { action as toggleMenu } from 'redux-burger-menu';

import MainContainer from '../containers/MainContainer'

class List extends PureComponent{

  //second to be called
  constructor(props){
    super(props)
  }

  componentWillUnmount(){
    console.log('list.js unmount');
  }
  //first to be called
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
    const PostTypeName = query.posttype;

    if(PostTypeName == 'projects'){
        await reduxStore.dispatch(getProjects({per_page:99, order_by: 'menu_order'}))
    }

    return { PostTypeName: PostTypeName };
  }

  //third to be called
  //
  render(){
    const { projects } = this.props.reducer;
    const { PostTypeName } = this.props;

    //Dynamic Component
    const Component = components[PostTypeName];
    return (<MainContainer>
              <Component {...this.props} />
            </MainContainer>)
  }
}

const components = {
  projects: ({reducer}) => <ProjectList projects={reducer.projects}/>,
  career: ({reducer}) => <CareerTimeline experiences={reducer.experiences}/>,
  blog: ({reducer}) => <BlogList blogList={reducer.blogList}/>,
  projectview: ({reducer}) => <ProjectView project={reducer.project}/>,
  careerview: ({reducer}) => <CareerView experience={reducer.experience} projects={reducer.projects_by_career}/>,
  blogview: ({reducer}) => <BlogView blog={reducer.blog}/>,
  about: () => <AboutWebsite />,
}

const mapStateToProps = state => ({
 ...state
})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(List);
