import { completeTypes, createTypes, withPostSuccess } from 'redux-recompose';

import * as ExamService from '@services/ExamService';

import { actionCreators as exerciseActions } from '../ExerciseDetails/actions';

/* ------------- Auth actions ------------- */

export const actions = createTypes(
  completeTypes(['GET_EXAM_INFO', 'GET_EXAM_LIST', 'GET_AVAILABLE_EXAMS']),
  '@@EXAM'
);

export const actionCreators = {
  getExamInfo: id => ({
    type: actions.GET_EXAM_INFO,
    target: 'examInfo',
    payload: id,
    service: ExamService.getExamInfo,
    injections: [withPostSuccess(dispatch => dispatch(exerciseActions.setReRender()))]
  }),
  submitExamAnswer: (id, body, onFinish) => ({
    type: actions.SUBMIT_ANSWER,
    target: 'examAnswer',
    payload: { id, body },
    service: ExamService.submitAnswer,
    injections: [withPostSuccess(() => onFinish())]
  }),
  getExamList: () => ({
    type: actions.GET_EXAM_LIST,
    target: 'examList',
    service: ExamService.getExamList
  }),
  getAvailableExams: () => ({
    type: actions.GET_AVAILABLE_EXAMS,
    target: 'examList',
    service: ExamService.getAvailableExams
  })
};
