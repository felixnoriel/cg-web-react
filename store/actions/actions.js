import { fetchArchive, 
         fetchPost, 
         fetchGenericByRestRoute, } from '../service';

import { GET_ARCHIVE, 
         GET_POST,
         GET_BURGER_MENU,
         GET_SEARCH,
         GET_COMMENTS
      } from '../actionTypes';


// This action will return a list of CATEGORY under a parent category/post type
export const getCategoryArchive = (posttype, params) => async dispatch => {
    // This dispatch is for loading (showing a loader)
    // Implement further if needed
    dispatch({
        type: GET_ARCHIVE.menu[params.category], // dynamic action type to cater for post types
        posttype: 'menu',
        archive: [],
    })

    const archivePromise = await fetchArchive(posttype, params);
    
    try{
    const archive = await archivePromise.json();

    dispatch({
        type: GET_ARCHIVE.menu[params.category],
        posttype: 'menu',
        archive: archive,
    })
    }catch(err){
        // Dispatch error message and notify front end
        dispatch({
            type: GET_ARCHIVE.menu[params.category],
            errror: err
        })
    }    
}

// This action will return a list of ITEMS under a category / post type
export const getArchive = (posttype, params) => async dispatch => {
    // This dispatch is for loading (showing a loader)
    // Implement further if needed
     dispatch({
      type: GET_ARCHIVE[posttype], // dynamic action type to cater for post types
      posttype: posttype,
      archive: [],
     })

     const archivePromise = await fetchArchive(posttype, params);
     
     try{
        const archive = await archivePromise.json();

        dispatch({
            type: GET_ARCHIVE[posttype],
            posttype: posttype,
            archive: archive,
        })
     }catch(err){
        // Dispatch error message and notify front end
        dispatch({
            type: GET_ARCHIVE[posttype],
            errror: err
        })
     }    
}

export const getPost = (posttype, params) => async dispatch => {
    // This dispatch is for loading (showing a loader)
    // Implement further if needed
    dispatch({
        type: GET_POST[posttype],
        posttype: posttype,
        post: {}
    })

    const postPromise = await fetchPost(posttype, params);
    try{
        const post = await postPromise.json();

        dispatch({
            type: GET_POST[posttype],
            posttype: posttype,
            post: post
        })
    }catch(err){
        // Dispatch error message and notify front end
        dispatch({
            type: GET_POST[posttype],
            error: err
        })
    }   
}

export const getBurgerMenu = () => async dispatch => {
    // This dispatch is for loading (showing a loader)
    // Implement further if needed
    dispatch({
        type: GET_BURGER_MENU,
        burgerMenu: {},
    })

    const burgerMenuPromise = await fetchGenericByRestRoute('burger_menu'); // burger_menu is mapped in WP backend - register route
    try{
        const burgerMenu = await burgerMenuPromise.json();

        dispatch({
            type: GET_BURGER_MENU,
            burgerMenu: burgerMenu,
        })
    }catch(err){
        // Dispatch error message and notify front end
        dispatch({
            type: GET_BURGER_MENU,
            error: err
        })
    }
    
}

export const getComments = ({posttype}) => async dispatch => {

}

export const getSearch = ({q}) => async dispatch => {

}


/* This is not a redux action, only used to check if a subcategory exists */
export const getCategoriesByPostType = async (route) => {
    try{
        const promise = await fetchGenericByRestRoute(route);
        const json = await promise.json();
        return json;
    }catch(err){
        return false;
    }
}