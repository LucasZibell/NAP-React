import { completeTypes, createTypes } from 'redux-recompose';

import * as ExerciseService from '@services/ExerciseService';

export const actions = createTypes(completeTypes(['GET_GUIDE']), '@@GUIDES');

export const actionCreators = {
  getGuide: id => ({
    type: actions.GET_GUIDE,
    target: 'guideList',
    payload: id,
    service: ExerciseService.getGuide
  })
};
