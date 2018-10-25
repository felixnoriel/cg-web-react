import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// initialise initial state for the stores
// refine if needed
const initialState = { }

export function initializeStore(initialState = initialState) {
 return createStore(
   rootReducer,
   initialState, 
   composeWithDevTools(applyMiddleware(thunk))
 );
}