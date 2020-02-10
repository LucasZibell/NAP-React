import Immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const defaultState = {
  currentUser: {},
  courses: []
};

const initialState = completeState(defaultState);

const reducerDescription = {
  primaryActions: [actions.AUTH_INIT, actions.LOGIN, actions.GET_COURSES]
};

export const reducer = createReducer(Immutable(initialState), completeReducer(reducerDescription));
