import service from '../service';
import { GET_ARCHIVE, 
         GET_POST,
         GET_BURGER_MENU,
         GET_SEARCH,
         GET_COMMENTS
      } from '../actionTypes';


export const getArchive = ({posttype, per_page}) => async dispatch => {
    // This dispatch is for loading (showing a loader)
    // Implement further if needed
     dispatch({
      type: GET_ARCHIVE[posttype], // dynamic action type to cater for post types
      posttype: posttype,
      archive: [],
     })

     const archivePromise = await service.getArchive(posttype, {orderby:'menu_order', per_page: per_page});
     const archive = await archivePromise.json();

     dispatch({
        type: GET_ARCHIVE[posttype],
        posttype: posttype,
        archive: archive,
     })
}


export const getPost = ({posttype, slug}) => async dispatch => {
    // This dispatch is for loading (showing a loader)
    // Implement further if needed
    dispatch({
        type: GET_POST[posttype],
        posttype: posttype,
        post: {}
    })

    const postPromise = await service.getSinglePost(posttype, {slug: slug});
    const post = await postPromise.json();

    dispatch({
        type: GET_POST[posttype],
        posttype: posttype,
        post: post
    })
}

export const getBurgerMenu = () => async dispatch => {
    // This dispatch is for loading (showing a loader)
    // Implement further if needed
    dispatch({
        type: GET_BURGER_MENU,
        burgerMenu: {},
    })

    const burgerMenuPromise = await service.getGeneric('burger_menu'); // burger_menu is mapped in WP backend - register route
    const burgerMenu = await burgerMenuPromise.json();

    dispatch({
        type: GET_BURGER_MENU,
        burgerMenu: burgerMenu,
    })
}

export const getComments = ({posttype}) => async dispatch => {

}

export const getSearch = ({q}) => async dispatch => {

}