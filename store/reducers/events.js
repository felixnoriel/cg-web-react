import { GET_ARCHIVE, 
        GET_POST,
} from '../actionTypes';

const events = (state = {}, action) => {
    // For immutability, it's a must to pass a new object every time

    switch (action.type) {
        case GET_ARCHIVE.events.list :
            return  Object.assign({}, state, {
                        eventArchive: action.archive
                    });
        
        case GET_ARCHIVE.events.birthday :
            return  Object.assign({}, state, {
                        birthdayArchive: action.archive
                    });
        
        case GET_ARCHIVE.events.corporate :
            return  Object.assign({}, state, {
                        corporateArchive: action.archive
                    });
        
        case GET_ARCHIVE.events.wedding :
            return  Object.assign({}, state, {
                        weddingArchive: action.archive
                    });

        case GET_POST.birthday :
            return  Object.assign({}, state, {
                        birthdayPost: action.post
                    });

        case GET_POST.corporate :
            return  Object.assign({}, state, {
                        corporatePost: action.post
                    });

        case GET_POST.wedding :
            return  Object.assign({}, state, {
                        weddingPost: action.post
                    });

        default:
            return state
        }

}

export default events;