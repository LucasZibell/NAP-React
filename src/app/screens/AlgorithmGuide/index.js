import React, { Fragment } from 'react';

import Text from '@components/Text';
import GuideList from '@components/GuideList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const mockExcerciseList = [
  {
    id: 99,
    title: 'Ejercicio  30',
    description: 'Aprendemos a programar'
  },
  {
    id: 88,
    title: 'Ejercicio 66',
    description: 'Que es un if?'
  },
  {
    id: 77,
    title: 'Ejercicio 90',
    description: 'Que es un for?'
  }
];

function AlgorithmGuide() {
  return (
    <Fragment>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom>
            Bienvenido a la guía de algoritmia
          </Typography>
        </Grid>
      </Grid>
      <GuideList excerciseList={mockExcerciseList} />
    </Fragment>
  );
}

export default AlgorithmGuide;
