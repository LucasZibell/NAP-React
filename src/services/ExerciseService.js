// import api from '@config/api';

const options = [
  {
    text: 'A',
    value: 'a'
  },
  {
    text: 'B',
    value: 'b'
  },
  {
    text: 'C',
    value: 'c'
  }
];

export const getExerciseInfo = id =>
  new Promise(resolve =>
    resolve({
      data: {
        id,
        title: 'Aprendiendo el abecedario',
        description: '¿Cual es la primer letra del abecedario?',
        options,
        answer: 'a',
        multipleChoice: true
      },
      ok: true
    })
  ); // api.get(`/exercise_info/${id}`);
