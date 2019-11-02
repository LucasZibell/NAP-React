import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Text from '@components/Text';
import GuideList from '@components/GuideList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import titulo from '@assets/img/titulos/Algoritmia.png';

const useStyles = makeStyles(theme => ({
  imagenTitulo: {
    width: '30%',
  },
}));

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
  const classes = useStyles();
  return (
    <Fragment>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={8}>
          <img src={titulo} alt="titulo" className={`${classes.imagenTitulo}`} />
        </Grid>
      </Grid>
      <GuideList excerciseList={mockExcerciseList} />
    </Fragment>
  );
}

export default AlgorithmGuide;
