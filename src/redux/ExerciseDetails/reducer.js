import Immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const defaultState = {
  exerciseInfo: {}
};

const initialState = completeState(defaultState);

const reducerDescription = {
  primaryActions: [actions.GET_EXERCISE_INFO, actions.SUBMIT_ANSWER],
  override: {
    [actions.CLEAR_EXERCISE]: state => ({ ...state, exerciseInfo: {} })
  }
};

export const reducer = createReducer(Immutable(initialState), completeReducer(reducerDescription));
