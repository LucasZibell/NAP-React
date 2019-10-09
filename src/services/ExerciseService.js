// import api from '@config/api';

// export const getExerciseInfo = id => {
//   console.log(1);
//   return api.get(`/exercises/${id}`);
// };

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
        multipleChoice: false
      },
      ok: true
    })
  ); // api.get(`/exercise_info/${id}`);
