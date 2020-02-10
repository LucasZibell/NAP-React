import { completeTypes, createTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import * as AuthService from '@services/AuthServices';
import { getCourses } from '@services/StudentService';

import Routes from '@constants/routes';

/* ------------- Auth actions ------------- */

export const actions = createTypes(
  completeTypes(['AUTH_INIT', 'LOGIN', 'GET_COURSES'], ['LOGOUT']),
  '@@AUTH'
);

export const actionCreators = {
  init: () => ({
    type: actions.AUTH_INIT,
    target: 'currentUser',
    service: AuthService.getUserData,
    injections: [
      withPostFailure(dispatch => {
        dispatch(push(Routes.LOGIN));
      })
    ]
  }),
  login: body => dispatch =>
    dispatch({
      type: actions.LOGIN,
      target: 'currentUser',
      payload: body,
      service: AuthService.login,
      injections: [
        withPostSuccess(() => {
          dispatch(actionCreators.init());
          dispatch(push(Routes.HOME));
        }),
        withPostFailure(() => {
          toast.error(t('toast_text:INVALID_CREDENTIALS'));
        })
      ]
    }),
  logout: () => async dispatch => {
    AuthService.removeCurrentUser();
    dispatch({ type: actions.LOGOUT });
    dispatch(push(Routes.LOGIN));
  },
  getCourses: () => ({
    type: actions.GET_COURSES,
    target: 'courses',
    service: getCourses
  })
};
