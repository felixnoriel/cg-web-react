import { GET_DRINKS_ARCHIVE, 
         GET_DRINKS_POST,
         GET_DRINKS_ARCHIVE_BY_CATEGORY 
    } from '../constants';

export default (state = {}, action) => {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
    case GET_DRINKS_ARCHIVE:
        return  Object.assign({}, state, {
                    drinksArchive: action.drinksArchive
                });
    
    case GET_DRINKS_POST:
        return  Object.assign({}, state, {
                    drinksObj: action.drinksObj
                });

    case GET_DRINKS_ARCHIVE_BY_CATEGORY:
        return  Object.assign({}, state, {
                    drinksArchiveCategory: action.drinksArchiveCategory
                });

    default:
        return state
    }
}
