import { GET_POST } from '../actionTypes';

const post = (state = {}, action) => {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
        case GET_POST :
            return  Object.assign({}, state, {
                        [action.posttype]: { // eg: /menu
                            [action.slug]: { // eg: /menu/food
                                post: action.post
                            }
                        }
                    });

        default:
            return state
    }
}

export default post;