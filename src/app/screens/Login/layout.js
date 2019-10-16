import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Form, reduxForm } from 'redux-form';

import { required } from '@utils/validationUtils';
// import Input from '@components/Input';
import withLoader from '@components/Loader';
import Routes from '@constants/routes';

import FormNames from './formFieldNames';
import styles from './styles.scss';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@components/Input';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Login({ handleSubmit }) {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={`${classes.image} ${styles.backgroundImage}`} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={`${classes.avatar} ${styles.verde}`}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            {t('login:LOGIN')}
            <br></br>
            {t('login:LOGIN_EXPLANATION')}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Input
              label={t('login:EMAIL')}
              name={FormNames.EMAIL}
              inputType="text"
              validate={[required]}
              inputClassName={`m-bottom-2 full-width ${styles.input}`}
              placeholder={t('login:EMAIL_PLACEHOLDER')}
              fullWidth
              variant="outlined"
              margin="normal"
              required
            />
            <br></br>
            <Input
              label={t('login:PASSWORD')}
              name={FormNames.PASSWORD}
              type="password"
              validate={[required]}
              inputClassName={`m-bottom-2 full-width ${styles.input}`}
              placeholder={t('login:PASSWORD_PLACEHOLDER')}
              fullWidth
              variant="outlined"
              margin="normal"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={`${classes.submit} ${styles.verde}`}
            >
              <span className={`m-bottom-1 ${styles.textoBlanco}`}>{t('login:ENTER')}</span>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  <a href={Routes.RECOVER_PASSWORD}>{t('login:FORGOT_PASSWORD')}</a>
                </Link>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: FormNames.LOGIN
})(withLoader(props => props.loading)(Login));
