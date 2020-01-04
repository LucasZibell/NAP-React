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
  newExercise: null,
  initialBoard: [[[], [], [], []], [[], [], [], []], [[], [], [], []], [[], [], [], []], [[], [], [], []]],
  finalBoard: [[[], [], [], []], [[], [], [], []], [[], [], [], []], [[], [], [], []], [[], [], [], []]]
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
    [actions.SET_RE_RENDER]: state => ({ ...state, needReRender: true }),
    [actions.SET_INITIAL_BOARD_CELL]: (state, { payload }) => ({
      ...state,
      initialBoard: (state.initialBoard[payload.y][payload.x] = payload.value)
    }),
    [actions.SET_FINAL_BOARD_CELL]: (state, { payload }) => ({
      ...state,
      finalBoard: (state.finalBoard[payload.y][payload.x] = payload.value)
    })
  }
};

export const reducer = createReducer(Immutable(initialState), completeReducer(reducerDescription));
