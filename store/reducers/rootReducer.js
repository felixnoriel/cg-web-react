import { combineReducers } from 'redux';
import { food,
		 dessert,
		 drinks,
		 events 
			} from './archiveAndPosts';

import settings from './settings';

export default combineReducers({
    food: food,
    drinks: drinks,
    dessert: dessert,
    events: events,
    settings: settings,
});
