import api from '@config/api';

export const getExerciseInfo = id => {
  console.log(1);
  return api.get(`/exercises/${id}`);
};
