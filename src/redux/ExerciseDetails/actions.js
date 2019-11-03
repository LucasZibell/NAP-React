import { completeTypes, createTypes, withPostSuccess } from 'redux-recompose';
import { PASSED } from '@constants/exercise';

import * as ExerciseService from '@services/ExerciseService';

/* ------------- Auth actions ------------- */

export const actions = createTypes(
  completeTypes(['GET_EXERCISE_INFO', 'SUBMIT_ANSWER'], ['CLEAR_EXERCISE']),
  '@@EXERCISE_DETAILS'
);

export const actionCreators = {
  getExerciseInfo: id => ({
    type: actions.GET_EXERCISE_INFO,
    target: 'exerciseInfo',
    payload: id,
    service: ExerciseService.getExerciseInfo
  }),
  submitAnswer: (id, body, onFinish) => ({
    type: actions.SUBMIT_ANSWER,
    target: 'answer',
    payload: { id, body },
    service: ExerciseService.submitAnswer,
    injections: [withPostSuccess((_, { data }) => onFinish(data.results.status === PASSED))]
  }),
  clearExercise: () => ({
    type: actions.CLEAR_EXERCISE
  })
};
