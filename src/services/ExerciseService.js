// import api from '@config/api';

export const getExerciseInfo = id =>
  new Promise(resolve =>
    resolve({
      data: {
        id,
        title: 'Aprendiendo lo que es un if',
        description: 'Tenes que hacer un if para completar este ejercicio'
      },
      ok: true
    })
  ); // api.get(`/exercise_info/${id}`);
