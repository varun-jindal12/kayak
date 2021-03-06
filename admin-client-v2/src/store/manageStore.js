import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import KayakAdminReducers from '../reducers';

const middlewares = applyMiddleware(logger, thunk);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  KayakAdminReducers,
  compose(
    middlewares,
    devTools,
  ),
);

export default store;
