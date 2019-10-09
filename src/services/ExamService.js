// import api from '@config/api';

const mockExamList = [
  {
    id: 1,
    title: 'Examen 1',
    description: 'Primer trimestre'
  },
  {
    id: 2,
    title: 'Examen 2',
    description: 'Segundo trimestre'
  },
  {
    id: 3,
    title: 'Examen 3',
    description: 'Tercer trimestre'
  }
];

export const getExamInfo = () =>
  new Promise(resolve =>
    resolve({
      data: {
        title: 'Examen 1',
        description: 'El primer examen'
      },
      ok: false
    })
  ); // api.get(`/exercise_info`);

export const getExamList = () =>
  new Promise(resolve =>
    resolve({
      data: {
        exams: mockExamList
      },
      ok: true
    })
  ); // api.get(`/exam_list`);
