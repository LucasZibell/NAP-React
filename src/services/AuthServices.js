import api from '@config/api';
import { actionCreators as authActions } from '../redux/Auth/actions';

import * as LocalStorageService from './LocalStorageService';

export const setCurrentUser = token => {
  // api.setHeader('Authorization', token);
  LocalStorageService.setSessionToken(token);
};

export const login = async body => api.get('auth/identity/callback', body, { withCredentials: true });

export const getCurrentUser = async () => {
  const currentSessionToken = LocalStorageService.getSessionToken();
  if (currentSessionToken) {
    // api.setHeader('Authorization', currentSessionToken);
    return true;
  }
  return false;
};

export const removeCurrentUser = async () => LocalStorageService.removeSessionToken();

export const authSetup = async (dispatch /* currentUserToken */) => {
  // await api.setHeaders(currentUserToken);
  dispatch(authActions.init());
};

export const authApiSetup = (/* apiInstance */) => {
  // apiInstance.setHeader('Authorization', LocalStorageService.getSessionToken());
};

export const getUserData = () => {
  const teacher = LocalStorageService.getSessionToken() === 'admin';
  const data = teacher
    ? {
        name: 'Admin',
        surname: 'Admin',
        email: 'test@admin.com',
        teacher,
        awards: ['FIRST_EXCERSICE', 'THREE_STREAK', 'COMPLETE_ROBOTICS']
      }
    : {
        name: 'Alumno',
        surname: 'User',
        email: 'test@user.com',
        awards: ['FIRST_EXCERSICE']
      };
  return new Promise(resolve =>
    resolve({
      data,
      ok: true
    })
  );
};
