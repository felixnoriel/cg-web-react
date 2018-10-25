import { GET_ARCHIVE, 
         GET_POST,
    } from '../actionTypes';

//When the list gets big, separate them into their own files

export function foodReducer(state = {}, action) {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
    case GET_ARCHIVE.food :
        return  Object.assign({}, state, {
                    foodArchive: action.archive
                });
    
    case GET_POST.food :
        return  Object.assign({}, state, {
                    foodObj: action.post
                });

    default:
        return state
    }
}


export function drinksReducer(state = {}, action) {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
    case GET_ARCHIVE.drinks :
        return  Object.assign({}, state, {
                    drinksArchive: action.archive
                });
    
    case GET_POST.drinks :
        return  Object.assign({}, state, {
                    drinksObj: action.post
                });

    default:
        break;
    }
}

export function eventsReducer(state = {}, action) {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
    case GET_ARCHIVE.events :
        return  Object.assign({}, state, {
                    eventsArchive: action.archive
                });
    
    case GET_POST.events :
        return  Object.assign({}, state, {
                    eventsObj: action.post
                });

    default:
        return state
    }
}


export function dessertReducer(state = {}, action) {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
    case GET_ARCHIVE.dessert :
        return  Object.assign({}, state, {
                    dessertArchive: action.archive
                });
    
    case GET_POST.dessert :
        return  Object.assign({}, state, {
                    dessertObj: action.post
                });

    default:
        return state
    }
}
