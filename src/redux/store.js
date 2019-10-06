import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import { reducer as form } from 'redux-form';
import { fetchMiddleware } from 'redux-recompose';

import { actions as authActions } from './Auth/actions';
import { reducer as auth } from './Auth/reducer';
import { reducer as exam } from './Exam/reducer';
import { reducer as exerciseDetails } from './ExerciseDetails/reducer';

export const history = createHistory();

// Add reducers here
const reducers = combineReducers({
  auth,
  form,
  exam,
  exerciseDetails,
  router: connectRouter(history)
});

const middlewares = [routerMiddleware(history), fetchMiddleware];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

middlewares.push(fetchMiddleware);

// TODO Add this if you need it
/* ------------- Analytics Middleware ------------- */
// middlewares.push(AnalyticsMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// TODO Add this if you need it Into rootReducer scope
// if (action.type === authActions.SIGN_OUT) {
//   return reducers(getGlobalState(state), action);
// }
const rootReducer = (state, action) => {
  if (action.type === authActions.LOGOUT) {
    state = undefined;
  }
  return reducers(state, action);
};

const store = createStore(rootReducer, composeEnhancers(...enhancers));

export default store;
