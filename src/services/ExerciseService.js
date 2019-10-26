import api from '@config/api';

export const getExerciseInfo = id => api.get(`/exercises/${id}`);

export const getGuide = id => api.get(`/guides/${id}`);
