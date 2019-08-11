import Immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const defaultState = {
  currentUser: null
};

const initialState = completeState(defaultState);

const reducerDescription = {
  primaryActions: [actions.AUTH_INIT, actions.LOGIN]
};

export const reducer = createReducer(Immutable(initialState), completeReducer(reducerDescription));
