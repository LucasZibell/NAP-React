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
        title: 'Aprendiendo lo que es un if',
        description: 'Tenes que hacer un if para completar este ejercicio',
        options
      },
      ok: true
    })
  ); // api.get(`/exercise_info/${id}`);
