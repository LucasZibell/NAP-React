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
    api.setHeader('Authorization', currentSessionToken);
    return true;
  }
  return false;
};

export const removeCurrentUser = () => api.get('/logout', null, { withCredentials: true });

export const authSetup = async (dispatch /* currentUserToken */) => {
  // await api.setHeaders(currentUserToken);
  dispatch(authActions.init());
};

export const authApiSetup = (/* apiInstance */) => {
  // apiInstance.setHeader('Authorization', LocalStorageService.getSessionToken());
};

export const getUserData = () => api.get('/user', null, { withCredentials: true });

export const resetPassword = body => api.post('/password_reset', body, { withCredentials: true });
