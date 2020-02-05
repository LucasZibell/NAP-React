import { create } from 'apisauce';

import api from '@config/api';

export const getExerciseInfo = id => api.get(`/exercises/${id}`, null, { withCredentials: true });

export const submitAnswer = ({ id, body }) =>
  api.post(`/exercises/${id}/solutions`, { solution: { content: body } }, { withCredentials: true });

export const getGuide = id => api.get(`/guides/${id}`, null, { withCredentials: true });

const formApi = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export const createExercise = ({ name, description, answer, option1, option2, guide, image }) => {
  const options = [answer, option1, option2];
  options.sort((a, b) => 0.5 - Math.random()); //eslint-disable-line
  const exercise = {
    name,
    description,
    number: 99,
    choices: options,
    editor: 'multiple_choice',
    language: 'text',
    test: `---\nequal: ${options.indexOf(answer)}\n`,
    image
  };
  const formData = new FormData()
  formData.append('exercise[name]', exercise.name)
  formData.append('exercise[description]', exercise.description)
  formData.append('exercise[number]', exercise.number)
  formData.append('exercise[choices][]', exercise.choices[0])
  formData.append('exercise[choices][]', exercise.choices[1])
  formData.append('exercise[choices][]', exercise.choices[2])
  formData.append('exercise[editor]', exercise.editor)
  formData.append('exercise[language]', exercise.language)
  formData.append('exercise[test]', exercise.test)
  formData.append('exercise[image]', exercise.image)

  return formApi.post(`/guides/${guide}/exercises`, formData, { withCredentials: true });
};

export const createCodeExercise = ({ name, description, guide, test }) => {
  const exercise = {
    name,
    description,
    number: 99,
    editor: 'code',
    language: 'gobstones',
    test
  };
  return api.post(`/guides/${guide}/exercises`, { exercise }, { withCredentials: true });
};
