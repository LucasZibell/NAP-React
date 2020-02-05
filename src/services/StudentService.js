import { create } from 'apisauce';

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
