import { GET_BURGER_MENU, 
         GET_SEARCH,
         GET_PAGE,
         SET_SETTINGS,
    } from '../actionTypes';

const initialState = {
    burgerMenu: [],
    search: [],
    globalSettings: {}
}

const settings = (state = initialState, action) => {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
    case GET_BURGER_MENU :
        return  Object.assign({}, state, {
                    burgerMenu: action.burgerMenu
                });
    
    case GET_SEARCH :
        return  Object.assign({}, state, {
                    search: {
                        searchList: action.searchList,
                        searchText: action.searchText,
                        isLoading: action.isLoading,
                    }
                });

    case SET_SETTINGS : 
        let settingsObj = {};
        for(let i in action.params){
            settingsObj[i] = action.params[i];
        }
        // merge globalSettings with new settingsObj
        const globalSettings = Object.assign({}, state.globalSettings, settingsObj);
        
        return Object.assign({}, state, {
            globalSettings: globalSettings,
        });
        
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