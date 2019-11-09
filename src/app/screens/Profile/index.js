import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import Text from '@components/Text';
import withLoader from '@components/Loader';
import defaultUser from '@assets/icons/default_user.png';

import styles from '@assets/jss/material-dashboard-react/views/dashboardStyle.js';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import titulo from '@assets/img/titulos/Perfil.png';
// core components
import GridItem from '@components/Grid/GridItem.js';
import GridContainer from '@components/Grid/GridContainer.js';
import Card from '@components/Card/Card.js';
import CardHeader from '@components/Card/CardHeader';
import CardAvatar from '@components/Card/CardAvatar';
import CardBody from '@components/Card/CardBody';
import CardFooter from '@components/Card/CardFooter';
import CardIcon from '@components/Card/CardIcon';
// @material-ui/icons
import Update from '@material-ui/icons/Update';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import Code from '@material-ui/icons/Code';

import styles2 from './styles.scss';

class Profile extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={1} />
          <GridItem xs={12} sm={12} md={3}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={currentUser.photoUrl || defaultUser} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <Typography variant="h6" gutterBottom>
                  <Text>{`Nombre: ${currentUser.first_name}`}</Text>
                  <br />
                  <Text>{`Apellido: ${currentUser.last_name}`}</Text>
                  <br />
                  <Text>{`E-mail: ${currentUser.email}`}</Text>
                  <br />
                  <Text>{`Curso: ${currentUser.course}`}</Text>
                </Typography>
                <br />
              </CardBody>
            </Card>
          </GridItem>
          <Grid container md={8} spacing={3}>
            <Grid item xs={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <Code />
                  </CardIcon>
                  <p className={styles.cardCategory}>Registrarse con éxito </p>
                </CardHeader>
                <CardFooter stats>
                  <div className={styles.stats}>
                    <Update />
                    Hace 4 meses
                  </div>
                </CardFooter>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <Accessibility />
                  </CardIcon>
                  <p className={styles.cardCategory}>Superaste el Nivel 1</p>
                </CardHeader>
                <CardFooter stats>
                  <div className={styles.stats}>
                    <Update />
                    Hace 2 meses
                  </div>
                </CardFooter>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <AccessTime />
                  </CardIcon>
                  <p className={styles.cardCategory}>Superaste Robótica</p>
                </CardHeader>
                <CardFooter stats>
                  <div className={styles.stats}>
                    <Update />
                    Hace 3 días
                  </div>
                </CardFooter>
              </Card>
            </Grid>
          </Grid>
        </GridContainer>
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
  currentUser: get(store.auth, 'currentUser.user') || {},
  loading: store.auth.currentUserLoading
});

export default connect(mapStateToProps)(withLoader(props => props.loading)(Profile));
