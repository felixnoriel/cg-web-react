import { GET_ARCHIVE, 
         GET_POST,
} from '../actionTypes';

const initialState = {
    menu: {},
    events: {},
    location: {},
}
const archive = (state = initialState, action) => {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
        case GET_ARCHIVE :
            return  Object.assign({}, state, {
                        [action.posttype]: { // eg: /menu
                            [action.category]: { // eg: /menu/food
                                category: action.category,
                                posttype: action.posttype,
                                subCategory: action.subCategory,
                                archive: action.archive
                            }
                        }
                    });

        default:
            return state
    }
}

export default archive;