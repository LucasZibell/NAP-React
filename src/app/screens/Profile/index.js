import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Text from '@components/Text';
import defaultUser from '@assets/icons/default_user.png';

import { awards } from './constants';

import styles from './styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';



class Profile extends Component {

  render() {
    const { currentUser } = this.props;
    return (
      <div className="row padding-20">
        <div className="column margin-right-10">
          <Typography variant="h4" gutterBottom>
            <Text>Bienvenido<br></br> a tu perfil</Text>
          </Typography>
          <Avatar alt="Remy Sharp" src={currentUser.photoUrl || defaultUser} className={`${styles.bigAvatar}`} />
          <Typography variant="h6" gutterBottom>
            <Text>{`Nombre: ${currentUser.name}`}</Text>
            <br></br>
            <Text>{`Apellido: ${currentUser.surname}`}</Text>
            <br></br>
            <Text>{`E-mail: ${currentUser.email}`}</Text>
          </Typography>
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Paper className={`${styles.paper}`}>
            <Typography variant="h6" gutterBottom>
              Logros:
            </Typography>
            <Grid container justify="center" spacing={4}>
                <Grid key={4} item>
                  {currentUser.awards.map(elem => (
                    <img className="margin-10" key={elem} alt="award" src={awards[elem]} width={30} />
                  ))}
                </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string
  })
};

const mapStateToProps = store => ({
  currentUser: store.auth.currentUser
});

export default connect(mapStateToProps)(Profile);
