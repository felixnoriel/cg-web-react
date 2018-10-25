import { GET_FOOD_ARCHIVE, 
        GET_FOOD_POST,
        GET_FOOD_ARCHIVE_BY_CATEGORY 
    } from '../constants';

export default (state = {}, action) => {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
    case GET_FOOD_ARCHIVE:
        return  Object.assign({}, state, {
                    foodList: action.foodArchive
                });
    
    case GET_FOOD_POST:
        return  Object.assign({}, state, {
                    foodObj: action.foodObj
                });

    case GET_FOOD_ARCHIVE_BY_CATEGORY:
        return  Object.assign({}, state, {
                    foodListCategory: action.foodArchiveCategory
                });

    default:
        return state
    }
}
