import { completeTypes, createTypes } from 'redux-recompose';

import * as ExamService from '@services/ExamService';

/* ------------- Auth actions ------------- */

export const actions = createTypes(completeTypes(['GET_EXAM_INFO', 'GET_EXAM_LIST']), '@@EXAM');

export const actionCreators = {
  getExamInfo: id => ({
    type: actions.GET_EXAM_INFO,
    target: 'examInfo',
    payload: id,
    service: ExamService.getExerciseInfo
  }),
  getExamList: () => ({
    type: actions.GET_EXAM_LIST,
    target: 'examList',
    service: ExamService.getExamList
  })
};
