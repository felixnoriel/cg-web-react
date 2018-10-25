import service from '../service';
import { GET_ARCHIVE, 
         GET_POST
      } from '../actionTypes';


export const getArchive = ({posttype, per_page}) => async dispatch => {

     dispatch({
      type: `${GET_ARCHIVE}_${posttype}`, // dynamic action type to cater for post types
      posttype: posttype,
      archive: [],
     })

     const archivePromise = await service.getArchive(posttype, {orderby:'menu_order', per_page: per_page});
     const archive = await archivePromise.json();

     dispatch({
        type: `${GET_ARCHIVE}_${posttype}`,
        posttype: posttype,
        archive: archive,
     })
}


export const getPost = ({posttype, slug}) => async dispatch => {
    dispatch({
        type: `${GET_POST}_${posttype}`,
        posttype: posttype,
        post: {}
    })

    const postPromise = await service.getSinglePost(posttype, {slug: slug});
    const post = await postPromise.json();

    dispatch({
        type: `${GET_POST}_${posttype}`,
        posttype: posttype,
        post: post
    })
}