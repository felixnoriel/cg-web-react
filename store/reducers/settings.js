import { GET_BURGER_MENU, 
         GET_SEARCH,
         GET_PAGE
    } from '../actionTypes';

const settings = (state = {}, action) => {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
    case GET_BURGER_MENU :
        return  Object.assign({}, state, {
                    burgerMenu: action.burgerMenu
                });
    
    case GET_SEARCH :
        return  Object.assign({}, state, {
                    search: action.search
                });

    case GET_PAGE :
        return  Object.assign({}, state, {
                    pageObj: action.pageObj
                });

    default:
        return state
    }
}

export default settings;