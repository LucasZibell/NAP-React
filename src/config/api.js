import { create } from 'apisauce';

import * as AuthService from '@services/AuthServices';
import { actionCreators as authActions } from '@redux/Auth/actions';

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 30000
});

AuthService.authApiSetup(api);

export const apiSetup = dispatch => {
  // eslint-disable-line no-unused-vars, prettier/prettier
  api.addMonitor(async response => {
    if (response.status === 401) {
      // TODO: These callbacks should only be called if no other callback was asigned for the response.
      // - dispatch(alertActions.error(i18next.t('apiErrors:expired')));
      dispatch(authActions.logout());
    }
  });

  api.addMonitor(response => {
    if (response.problem === 'NETWORK_ERROR') {
      // TODO: These callbacks should only be called if no other callback was asigned for the response.
    }
  });
};

export default api;
