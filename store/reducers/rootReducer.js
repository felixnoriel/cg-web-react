import { combineReducers } from 'redux';
import dessert from './dessert';
import food from './food';
import drinks from './drinks';

export default combineReducers({
    food: food,
    drinks: drinks,
    dessert: dessert
});
