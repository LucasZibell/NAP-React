import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { reset } from 'redux-form';

import Text from '@components/Text';
import withLoader from '@components/Loader';
import defaultUser from '@assets/icons/default_user.png';

import styles from '@assets/jss/material-dashboard-react/views/dashboardStyle.js';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
import Phonelink from '@material-ui/icons/Phonelink';
import Reddit from '@material-ui/icons/Reddit';
import Filter3 from '@material-ui/icons/Filter3';
import Mouse from '@material-ui/icons/Mouse';
import Extension from '@material-ui/icons/Extension';
import LockOpen from '@material-ui/icons/LockOpen';

import { uploadCSV } from '@services/StudentService';

import { resetPassword } from '@services/AuthServices';

import { actionCreators } from '@redux/Auth/actions';

import CsvModal from './components/csvModal';
import ResetModal from './components/changePassword';
import StudentsModal from './components/studentsModal';

import styles2 from './styles.scss';

export const awards = {
  FIRST_EXERCISE: {
    image: Mouse,
    name: 'Primer ejercicio'
  },
  THREE_IN_A_ROW: {
    image: Filter3,
    name: 'Tres ejercicios seguidos'
  },
  COMPLETE_ROBOTICS: {
    image: Reddit,
    name: 'Completada guia de robotica'
  },
  COMPLETE_COMPUTER: {
    image: Phonelink,
    name: 'Completada guia de computacion'
  },
  COMPLETE_EXAM: {
    image: Extension,
    name: 'Completado el primer examen'
  }
};

class Profile extends Component {
  state = { csvOpen: false, resetOpen: false, studentsOpen: false, csvLoading: false };

  componentDidMount() {
    this.props.getCourses();
    this.props.getBooks();
  }

  toggleCSVModal = () => this.setState(prevState => ({ csvOpen: !prevState.csvOpen }));

  toggleStudentsModal = () => this.setState(prevState => ({ studentsOpen: !prevState.studentsOpen }));

  toggleResetPassModal = () => {
    this.setState(prevState => ({ resetOpen: !prevState.resetOpen }));
    this.props.resetPassFields();
  };

  uploadCsv = file => {
    this.setState({ csvLoading: true });
    uploadCSV(file[0]).then(({ ok }) => {
      if (ok) {
        toast.success('Archivo cargado con exito. Le llegara un mail con la informacion.');
        this.toggleCSVModal();
        this.setState({ csvLoading: false });
      } else {
        toast.error('Hubo un error con la carga de datos. Intente de nuevo mas tarde');
        this.toggleCSVModal();
        this.setState({ csvLoading: false });
      }
    });
  };

  resetPassword = values => {
    resetPassword({ password_reset: values }).then(({ ok }) => {
      if (ok) {
        toast.success('Contraseña cambiada con exito');
        this.toggleResetPassModal();
      } else {
        toast.error('Hubo un error en el cambio de contraseña');
        this.toggleResetPassModal();
      }
    });
  };

  classroomIntegration = () => window.open(`${process.env.REACT_APP_API_BASE_URL}/users/integration`);

  render() {
    const { currentUser, courses, isTeacher, books, getCourses } = this.props;
    return (
      <div className={`${styles2.marginContainer}`}>
        <CsvModal
          isOpen={this.state.csvOpen}
          closeModal={this.toggleCSVModal}
          handleLoadImage={this.uploadCsv}
          loading={this.state.csvLoading}
        />
        <ResetModal
          isOpen={this.state.resetOpen}
          closeModal={this.toggleResetPassModal}
          onSubmit={this.resetPassword}
        />
        <StudentsModal
          courses={courses}
          isOpen={this.state.studentsOpen}
          closeModal={this.toggleStudentsModal}
          books={books}
          getCourses={getCourses}
        />
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
            {isTeacher && (
              <button className="btn-primary margin-bottom-20" onClick={this.toggleCSVModal}>
                Cargar alumnos por csv
              </button>
            )}
            <button className="btn-primary margin-bottom-20" onClick={this.toggleResetPassModal}>
              Cambiar contraseña
            </button>
            {isTeacher && (
              <button className="btn-primary margin-bottom-20" onClick={this.classroomIntegration}>
                Integrar con classroom
              </button>
            )}
            {isTeacher && (
              <button className="btn-primary" onClick={this.toggleStudentsModal}>
                Ver cursos
              </button>
            )}
          </GridItem>
          <Grid container md={8} spacing={3}>
            {currentUser.awards &&
              currentUser.awards.map(({ name }) => {
                const { image: Image, name: awardName } = awards[name] || {
                  image: LockOpen,
                  name: 'Logro secreto desbloqueado'
                };
                return (
                  <Grid key={name} item xs={3}>
                    <Card>
                      <CardHeader color="info" stats icon>
                        <CardIcon color="info">
                          <Image />
                        </CardIcon>
                      </CardHeader>
                      <CardFooter stats>
                        <div className={styles.stats}>{awardName}</div>
                      </CardFooter>
                    </Card>
                  </Grid>
                );
              })}
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
  isTeacher: get(store, 'auth.currentUser.user.is_teacher'),
  loading: store.auth.currentUserLoading,
  courses: get(store.auth, 'courses.courses') || [],
  books: (get(store.auth, 'books.books') || []).map(elem => ({ text: elem, value: elem }))
});

const mapDispatchToProps = dispatch => ({
  resetPassFields: () => dispatch(reset('reset_password')),
  getCourses: () => dispatch(actionCreators.getCourses()),
  getBooks: () => dispatch(actionCreators.getBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(props => props.loading)(Profile));
