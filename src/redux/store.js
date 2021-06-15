import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mediaReducer from './reducers/media';

const rootReducer = combineReducers({ mediaReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));