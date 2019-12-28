import api from '@config/api';

export const getExerciseInfo = id => api.get(`/exercises/${id}`, null, { withCredentials: true });

export const submitAnswer = ({ id, body }) =>
  api.post(`/exercises/${id}/solutions`, { solution: { content: body } }, { withCredentials: true });

export const getGuide = id => api.get(`/guides/${id}`, null, { withCredentials: true });

export const createExercise = ({ name, description, answer, option1, option2, guide }) => {
  const options = [answer, option1, option2];
  options.sort((a, b) => 0.5 - Math.random()); //eslint-disable-line
  const exercise = {
    name,
    description,
    number: 99,
    choices: options,
    editor: 'multiple_choice',
    language: 'text',
    test: `---\nequal: ${options.indexOf(answer)}\n`
  };
  return api.post(`/guides/${guide}/exercises`, { exercise }, { withCredentials: true });
};
