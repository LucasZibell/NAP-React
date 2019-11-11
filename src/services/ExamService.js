import api from '@config/api';

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

export const getExamInfo = id => api.get(`/exams/${id}`, null, { withCredentials: true });

export const submitExamAnswer = (id, body) => api.post('/exams/1/solutions', body, { withCredentials: true });

export const getExamList = () =>
  new Promise(resolve =>
    resolve({
      data: {
        exams: mockExamList
      },
      ok: true
    })
  ); // api.get(`/exam_list`, null, { withCredentials: true });
