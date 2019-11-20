import { completeTypes, createTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import { PASSED } from '@constants/exercise';
import get from 'lodash.get';

import * as ExerciseService from '@services/ExerciseService';

/* ------------- Auth actions ------------- */

export const actions = createTypes(
  completeTypes(['GET_EXERCISE_INFO', 'SUBMIT_ANSWER'], ['CLEAR_EXERCISE', 'SET_RE_RENDER']),
  '@@EXERCISE_DETAILS'
);

export const actionCreators = {
  getExerciseInfo: id => ({
    type: actions.GET_EXERCISE_INFO,
    target: 'exerciseInfo',
    payload: id,
    service: ExerciseService.getExerciseInfo,
    injections: [
      withPostSuccess((dispatch, { data }) => {
        if (!get(data, 'exercise.multipleChoice')) dispatch(actionCreators.setReRender());
      })
    ]
  }),
  submitAnswer: (id, body, onFinish) => ({
    type: actions.SUBMIT_ANSWER,
    target: 'answer',
    payload: { id, body },
    service: ExerciseService.submitAnswer,
    injections: [
      withPostSuccess((_, { data }) => onFinish(data.results.status === PASSED)),
      withPostFailure(() => onFinish(false))
    ]
  }),
  clearExercise: () => ({
    type: actions.CLEAR_EXERCISE
  }),
  setReRender: () => ({
    type: actions.SET_RE_RENDER
  })
};
