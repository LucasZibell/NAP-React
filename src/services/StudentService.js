import { create } from 'apisauce';

import api from '@config/api';

const formApi = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export const uploadCSV = file => {
  const formData = new FormData();
  formData.append('csv', file);
  return formApi.post('/csv_import', formData, { withCredentials: true });
};

export const classroomIntegration = () => api.get('/users/integration', null, { withCredentials: true });

export const getCourses = () => api.get('/courses', null, { withCredentials: true });
