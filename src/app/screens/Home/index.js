import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import happyNappy from '@assets/nappy/happy_nappy.png';
import logoDigilab from '@assets/img/logoDigilab.png';
import backImg from '@assets/img/stripeBack.png';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  nappy: {
    position: 'absolute',
    top: '20%',
    right: '10%'
  },
  logoDigilab: {
    position: 'absolute',
    top: '20%',
    right: '75%'
  },
  backImagen2: {
    backgroundImage: `url(${backImg})`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'cover'
  },
  backImagen: {
    backgroundImage: `url(${backImg}) !important`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100%'
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <Fragment>
      <br />
      <br />
      <br />
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          <b>Bienvenido a DIGILAB</b>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              ¡Preparate para empezar un viaje con a Napy!
              <br />
              Juntos tendrán que superar una serie de problemas.
              <br />
              <b>¿Estás preparado? </b>
              <b>¡Adelante!</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={happyNappy} alt="happy-nappy" width={200} height={180} className={classes.nappy} />
            <img
              src={logoDigilab}
              alt="logoDigilab"
              width={200}
              height={180}
              className={classes.logoDigilab}
            />
          </Grid>
        </Grid>
      </Container>
      <div className="row center margin-top-50">
        <iframe
          title="Aprender a programar"
          src="https://www.youtube.com/embed/X5Wkp1gsNik"
          width="800"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </Fragment>
  );
}

export default Home;
