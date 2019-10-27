import api from '@config/api';

export const getExerciseInfo = id => api.get(`/exercises/${id}`);

export const submitAnswer = ({ id, body }) => api.post(`/exercises/${id}/solutions`, { answer: body }, { withCredentials: true });

export const getGuide = id => api.get(`/guides/${id}`);
