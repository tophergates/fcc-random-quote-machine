import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import quoteReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const INITIAL_STATE = {
  background: '#f7f7f7',
  error: '',
  loading: true,
  quote: {}
};

export default createStore(quoteReducer, INITIAL_STATE, composeEnhancers(applyMiddleware(thunk)));
