import api from '@config/api';

export const getExamInfo = id => api.get(`/exams/${id}`, null, { withCredentials: true });

export const submitExamAnswer = ({ id, body }) =>
  api.post(`/exams/${id}/solutions`, { solutions: body }, { withCredentials: true });

export const getExamList = () => api.get('/exams', null, { withCredentials: true });

export const getAvailableExams = () => api.get('/exam', null, { withCredentials: true });

export const enableExam = id => api.put(`/exams/${id}`, null, { withCredentials: true });
