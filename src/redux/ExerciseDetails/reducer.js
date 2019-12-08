import Immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const defaultState = {
  exerciseInfo: {
    exercise: {
      multipleChoice: true
    }
  },
  needReRender: false,
  newExercise: null
};

const initialState = completeState(defaultState);

const reducerDescription = {
  primaryActions: [actions.GET_EXERCISE_INFO, actions.SUBMIT_ANSWER, actions.CREATE_EXERCISE],
  override: {
    [actions.CLEAR_EXERCISE]: state => ({
      ...state,
      exerciseInfo: {
        exercise: {
          multipleChoice: true
        }
      }
    }),
    [actions.SET_RE_RENDER]: state => ({ ...state, needReRender: true })
  }
};

export const reducer = createReducer(Immutable(initialState), completeReducer(reducerDescription));
