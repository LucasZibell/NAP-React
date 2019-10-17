import Immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const defaultState = {
  guideList: {}
};

const initialState = completeState(defaultState);

const reducerDescription = {
  primaryActions: [actions.GET_GUIDE]
};

export const reducer = createReducer(Immutable(initialState), completeReducer(reducerDescription));
