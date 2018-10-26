import { combineReducers } from 'redux';
import menu from './menu';
import events from './events';
import settings from './settings';
import location from './location';

export default combineReducers({
    menu,
    events,
    location,
    settings,
});
