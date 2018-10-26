import { GET_BURGER_MENU, 
         GET_SEARCH,
         GET_PAGE,
         SET_SETTINGS,
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

    case SET_SETTINGS : 
        let settingsObj = {};
        for(let i in action.params){
            settingsObj[i] = action.params[i];
        }
        return Object.assign({}, state, { globalSettings: settingsObj})
        
    // you can put PAGE to a different reducer than settings, implement later on
    case GET_PAGE :
        return  Object.assign({}, state, {
                    page: action.page
                });

    default:
        return state
    }
}

export default settings;