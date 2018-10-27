import { fetchArchive, 
         fetchPost, 
         fetchGenericByRestRoute, } from '../service';

import { GET_ARCHIVE, 
         GET_POST,
         GET_PAGE,
         GET_BURGER_MENU,
         GET_SEARCH,
         GET_COMMENTS,
         SET_SETTINGS
      } from '../actionTypes';


// This action will return a list of ITEMS under a category / post type
export const getArchive = (route, posttype, category = null, subCategory = null, params = null) => async dispatch => {

    // This dispatch is for loading (showing a loader)
    // Implement further if needed
     dispatch({
      type: GET_ARCHIVE, // dynamic action type to cater for post types
      posttype: posttype,
      category: category,
      subCategory: subCategory,
      archive: [],
     })

     const archivePromise = await fetchArchive(route, params);
     
     try{
        const archive = await archivePromise.json();

        dispatch({
            type: GET_ARCHIVE,
            posttype: posttype,
            category: category,
            subCategory: subCategory,
            archive: archive,
        })
     }catch(err){
        // Dispatch error message and notify front end
        dispatch({
            type: GET_ARCHIVE,
            category: category,
            subCategory: subCategory,
            archive: [],
            error: err,
        })
     }    
}

export const getPost = (posttype, slug, params = null) => async dispatch => {
    // This dispatch is for loading (showing a loader)
    // Implement further if needed
    dispatch({
        type: GET_POST,
        posttype: posttype,
        slug: slug,
        post: {}
    })

    const postPromise = await fetchPost(posttype, slug, params);
    try{
        const post = await postPromise.json();

        dispatch({
            type: GET_POST,
            posttype: posttype,
            slug: slug,
            post: post
        })
    }catch(err){
        // Dispatch error message and notify front end
        dispatch({
            type: GET_POST,
            posttype: posttype,
            slug: slug,
            post: {},
            error: err,
        })
    }   
}

export const getPage = (slug, params = null) => async dispatch => {
    // This dispatch is for loading (showing a loader)
    // Implement further if needed
    dispatch({
        type: GET_PAGE,
        slug: slug,
        page: {}
    })

    const pagePromise = await fetchPost('pages', slug, params);
    try{
        const page = await pagePromise.json();

        dispatch({
            type: GET_PAGE,
            slug: slug,
            page: page
        })
    }catch(err){
        // Dispatch error message and notify front end
        dispatch({
            type: GET_PAGE,
            slug: slug,
            page: {},
            error: err,
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

    const burgerMenuPromise = await fetchGenericByRestRoute('burger_menu'); // /burger_menu is mapped in WP backend - register route
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

export const getSearch = ({searchText}) => async dispatch => {
    dispatch({
        type: GET_SEARCH,
        isLoading: true,
        searchList: [],
        searchText: "",
    })

    const searchPromise = await fetchGenericByRestRoute('search', {q: searchText} ); // /search is mapped in WP backend - register route
    try{
        const search = await searchPromise.json();

        dispatch({
            type: GET_SEARCH,
            isLoading: false,
            searchList: search,
            searchText: searchText,
        })
    }catch(err){
        // Dispatch error message and notify front end
        dispatch({
            type: GET_SEARCH,
            isLoading: false,
            searchList: [],
            searchText: "",
            error: err
        })
    }
}


export const getComments = ({posttype}) => async dispatch => {

}

export const setWebSettings = (params) => async dispatch => {
    dispatch({
        type: SET_SETTINGS,
        params: params
    })
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