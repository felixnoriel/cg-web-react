import { combineReducers } from 'redux';
import archive from './archive';
import post from './post';
import settings from './settings';

export default combineReducers({
    archive,
    post,
    settings,
});
