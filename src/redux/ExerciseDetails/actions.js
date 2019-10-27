import { completeTypes, createTypes } from 'redux-recompose';

import * as ExerciseService from '@services/ExerciseService';

/* ------------- Auth actions ------------- */

export const actions = createTypes(
  completeTypes(['GET_EXERCISE_INFO', 'SUBMIT_ANSWER']),
  '@@EXERCISE_DETAILS'
);

export const actionCreators = {
  getExerciseInfo: id => ({
    type: actions.GET_EXERCISE_INFO,
    target: 'exerciseInfo',
    payload: id,
    service: ExerciseService.getExerciseInfo
  }),
  submitAnswer: (id, body) => ({
    type: actions.SUBMIT_ANSWER,
    target: 'answer',
    payload: { id, body },
    service: ExerciseService.submitAnswer
  })
};
