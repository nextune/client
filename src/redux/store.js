import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mediaReducer from './reducers/media';
import homeReducer from './reducers/home';

const rootReducer = combineReducers({ mediaReducer, homeReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));