import { completeTypes, createTypes } from 'redux-recompose';
import { push } from 'react-router-redux';

import * as AuthService from '@services/AuthServices';
import * as RouteConstants from '@constants/routes';

/* ------------- Auth actions ------------- */

export const actions = createTypes(completeTypes(['AUTH_INIT'], ['LOGOUT']), '@@AUTH');

export const actionCreators = {
  init: () => ({
    type: actions.AUTH_INIT,
    target: 'currentUser',
    service: AuthService.getUserData
  }),
  logout: () => async dispatch => {
    await AuthService.removeCurrentUser();
    dispatch({ type: actions.LOGOUT });
    dispatch(push(RouteConstants.LOGIN));
  }
};
