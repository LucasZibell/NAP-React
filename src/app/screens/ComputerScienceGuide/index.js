import React, { Fragment } from 'react';
import Text from '@components/Text';
import GuideList from '@components/GuideList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const mockExcerciseList = [
  {
    id: 20,
    title: 'Ejercicio X',
    description: 'Que es un celular?'
  },
  {
    id: 30,
    title: 'Ejercicio Y',
    description: 'Que es una notebook?'
  },
  {
    id: 44,
    title: 'Ejercicio Z',
    description: 'Que es un gps?'
  }
];

function ComputerScienceGuide() {
  return (
    <Fragment>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom>
            Bienvenido a la guía de ciencias de la computación
          </Typography>
        </Grid>
      </Grid>
      <GuideList excerciseList={mockExcerciseList} />
    </Fragment>
  );
}

export default ComputerScienceGuide;
