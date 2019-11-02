import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Text from '@components/Text';
import defaultUser from '@assets/icons/default_user.png';

import { awards } from './constants';
import styles2 from './styles.scss';
import styles from "@assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import titulo from '@assets/img/titulos/Perfil.png';
// core components
import GridItem from "@components/Grid/GridItem.js";
import GridContainer from "@components/Grid/GridContainer.js";
import CustomInput from '@components/CustomInput/CustomInput.js';
import Button from '@components/CustomButtons/Button.js';
import Card from '@components/Card/Card.js';
import CardHeader from '@components/Card/CardHeader';
import CardAvatar from '@components/Card/CardAvatar';
import CardBody from '@components/Card/CardBody';
import CardFooter from '@components/Card/CardFooter';
import CardIcon from '@components/Card/CardIcon';
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

import avatar from '@assets/img/digilab.jpg';

class Profile extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      // <div className="row padding-20">
      //   <div className="column margin-right-10">
      //     <img src={titulo} alt="titulo" width={200} />
      //     <Avatar alt="Remy Sharp" src={currentUser.photoUrl || defaultUser} className={`${styles.bigAvatar}`} />
      //     <Typography variant="h6" gutterBottom>
      //       <Text>{`Nombre: ${currentUser.name}`}</Text>
      //       <br></br>
      //       <Text>{`Apellido: ${currentUser.surname}`}</Text>
      //       <br></br>
      //       <Text>{`E-mail: ${currentUser.email}`}</Text>
      //     </Typography>
      //   </div>
      //   <Grid
      //     container
      //     direction="row"
      //     justify="center"
      //     alignItems="flex-start"
      //   >
      //     <Paper className={`${styles.paper}`}>
      // <Typography variant="h6" gutterBottom>
      //   Logros:
      // </Typography>
      //       <Grid container justify="center" spacing={4}>
      //         <Grid key={4} item>
      //           {currentUser.awards.map(elem => (
      //             <img className="margin-10" key={elem} alt="award" src={awards[elem]} width={30} />
      //           ))}
      //         </Grid>
      //       </Grid>
      //     </Paper>
      //   </Grid>
      // </div>
      <div>
        <img src={titulo} alt="titulo" width={200} className={`${styles2.imagenTitulo}`}/>

        <GridContainer>
          <GridItem xs={12} sm={12} md={1}>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={currentUser.photoUrl || defaultUser} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <Typography variant="h6" gutterBottom>
                  <Text>{`Nombre: ${currentUser.name}`}</Text>
                  <br></br>
                  <Text>{`Apellido: ${currentUser.surname}`}</Text>
                  <br></br>
                  <Text>{`E-mail: ${currentUser.email}`}</Text>
                </Typography>
                <br></br>
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
                  <h3 className={styles.cardTitle}></h3>
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
                  <h3 className={styles.cardTitle}></h3>
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
                  <h3 className={styles.cardTitle}></h3>
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
  currentUser: store.auth.currentUser
});

export default connect(mapStateToProps)(Profile);
