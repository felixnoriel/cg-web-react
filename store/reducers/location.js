import { GET_ARCHIVE, 
         GET_POST,
} from '../actionTypes';

const location = (state = {}, action) => {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
        case GET_ARCHIVE.location :
            return  Object.assign({}, state, {
                        locationArchive: action.archive
                    });

        case GET_POST.location :
            return  Object.assign({}, state, {
                        locationPost: action.post
                    });

        default:
            return state
    }
}

export default location;