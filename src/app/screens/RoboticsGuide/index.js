import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Text from '@components/Text';
import GuideList from '@components/GuideList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import titulo from '@assets/img/titulos/Robotica.png';

const useStyles = makeStyles(theme => ({
  imagenTitulo: {
    width: '30%',
  },
}));

const mockExcerciseList = [
  {
    id: 1,
    title: 'Ejercicio 1',
    description: 'Este es facil'
  },
  {
    id: 2,
    title: 'Ejercicio 2',
    description: 'Este tambien'
  },
  {
    id: 3,
    title: 'Ejercicio 3',
    description: 'Este no'
  }
];

function RoboticsGuide() {
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

export default RoboticsGuide;
