import { GET_ARCHIVE, 
         GET_POST,
        } from '../constants';

export default (state = {}, action) => {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
        case `${GET_ARCHIVE}_dessert`: // GET_ARCHIVE_dessert or GET_ARCHIVE_dessert_category
            return  Object.assign({}, state, {
                        dessertArchive: action.dessertArchive
                    });
        
        case `${GET_POST}_${action.posttype}`: // GET_POST_dessert
            return  Object.assign({}, state, {
                        dessertObj: action.dessertObj
                    });

        default:
            return state
    }
}
