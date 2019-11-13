import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import FormNames from '@components/MultipleChoice/formFieldNames';

import { actionCreators } from '@redux/Exam/actions';
import { actionCreators as exerciseActions } from '@redux/ExerciseDetails/actions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import titulo from '@assets/img/titulos/Evaluaciones.png';
import withLoader from '@components/Loader';

import { parseResponseName } from './utils';
import ExamExcercises from './examExcercises';
import styles from './styles.scss';

class Exam extends Component {
  componentDidMount() {
    const needsReRender = this.props.needReRender;
    if (needsReRender) {
      location.reload();
    } else {
      this.props.getExamInfo(this.props.examId);
    }
  }

  onSubmit = () => {
    if (this.props.isTeacher) {
      this.props.enableExam(this.props.examId);
    } else {
      const exercises = this.props.exam.exercises || [];
      const body = exercises.map(({ id, multipleChoice }) => ({
        exercise: id,
        content: multipleChoice
          ? this.props.answers.values[parseResponseName(id)]
          : window.digilab.getStudentXml()
      }));
      this.props.submitExamAnswer(this.props.examId, body, () => console.log('Abrir Modal'));
    }
  };

  render() {
    const { exam, loading, isTeacher } = this.props;
    return (
      <Fragment>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Typography variant="h6" gutterBottom>
              <img src={titulo} alt="titulo" className={`${styles.imagenTitulo}`} />
            </Typography>
          </Grid>
        </Grid>
        <ExamExcercises
          exam={exam}
          loading={loading}
          onSubmit={this.onSubmit}
          buttonText={isTeacher ? 'Habilitar Evaluacion' : 'Enviar Solucion'}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getExamInfo: id => dispatch(actionCreators.getExamInfo(id)),
  submitExamAnswer: (id, body, onFinish) => dispatch(actionCreators.submitExamAnswer(id, body, onFinish)),
  setReRender: () => dispatch(exerciseActions.setReRender()),
  enableExam: id => dispatch(actionCreators.enableExam(id))
});

const mapStateToProps = (store, props) => ({
  examId: props.match.params.id,
  currentUser: store.auth.currentUser,
  isTeacher: get(store, 'auth.currentUser.user.is_teacher'),
  exam: get(store.exam, 'examInfo.exam') || {},
  loading: store.exam.examInfoLoading,
  userLoading: store.auth.currentUserLoading,
  answers: store.form[FormNames.MULTIPLE_CHOICE_FORM],
  needReRender: store.exerciseDetails.needReRender
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(props => props.userLoading)(Exam));
