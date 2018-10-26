import { GET_ARCHIVE, 
         GET_POST,
    } from '../actionTypes';

//When the list gets big, separate them into their own files
//List of reducers

const menu = (state = {}, action) => {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
    case GET_ARCHIVE.menu.list:
        return  Object.assign({}, state, {
            menuArchive: action.archive
        });
    case GET_ARCHIVE.menu.food :
        return  Object.assign({}, state, {
                    foodArchive: action.archive
                });
    
    case GET_POST.menu.food :
        return  Object.assign({}, state, {
                    foodPost: action.post
                });
    
    case GET_ARCHIVE.menu.drinks :
        return  Object.assign({}, state, {
                    drinksArchive: action.archive
                });
    
    case GET_POST.menu.drinks :
        return  Object.assign({}, state, {
                    drinksPost: action.post
                });

    case GET_ARCHIVE.menu.dessert :
        return  Object.assign({}, state, {
                    dessertArchive: action.archive
                });
    
    case GET_POST.menu.dessert :
        return  Object.assign({}, state, {
                    dessertPost: action.post
                });
    default:
        return state
    }
}

export default menu;