import api from '@config/api';
import { actionCreators as authActions } from '../redux/Auth/actions';

import * as LocalStorageService from './LocalStorageService';

export const setCurrentUser = token => {
  api.setHeader('Authorization', token);
  LocalStorageService.setSessionToken(token);
};

export const login = body =>
  new Promise(resolve => {
    if (body.email === 'admin') {
      resolve({ data: { token: 'admin', ...body }, ok: true });
    }
    resolve({ data: { token: 'token', ...body }, ok: true });
  });

export const getCurrentUser = async () => {
  const currentSessionToken = LocalStorageService.getSessionToken();
  if (currentSessionToken) {
    api.setHeader('Authorization', currentSessionToken);
    return true;
  }
  return false;
};

export const removeCurrentUser = async () => LocalStorageService.removeSessionToken();

export const authSetup = async (dispatch, currentUserToken) => {
  await api.setHeaders(currentUserToken);
  dispatch(authActions.init());
};

export const authApiSetup = apiInstance => {
  apiInstance.setHeader('Authorization', LocalStorageService.getSessionToken());
};

export const getUserData = () =>
  new Promise(resolve =>
    resolve({
      data: {
        name: 'Joe',
        surname: 'Jack',
        email: 'test@admin.com',
        teacher: LocalStorageService.getSessionToken() === 'admin',
        awards: ['FIRST_EXCERSICE', 'THREE_STREAK', 'COMPLETE_ROBOTICS']
      },
      ok: true
    })
  );

export const failedLogin = body => api.post('/failed_login', body);
