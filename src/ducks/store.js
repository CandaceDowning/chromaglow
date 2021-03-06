import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddlware from 'redux-promise-middleware';
import reducer from './reducer';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(promiseMiddlware)));

export default store;