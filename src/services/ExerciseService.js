import api from '@config/api';

export const getExerciseInfo = id => api.get(`/exercises/${id}`, null, { withCredentials: true });

export const submitAnswer = ({ id, body }) =>
  api.post(`/exercises/${id}/solutions`, { solution: { content: body } }, { withCredentials: true });

export const getGuide = id => api.get(`/guides/${id}`, null, { withCredentials: true });

export const createExercise = body => new Promise(resolve => resolve({ data: body, ok: true }));
