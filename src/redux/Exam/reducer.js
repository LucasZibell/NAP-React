import Immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const defaultState = {
  examInfo: {},
  examList: {}
};

const initialState = completeState(defaultState);

const reducerDescription = {
  primaryActions: [actions.GET_EXAM_INFO, actions.GET_EXAM_LIST]
};

export const reducer = createReducer(Immutable(initialState), completeReducer(reducerDescription));
