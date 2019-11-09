import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';
import isempty from 'lodash.isempty';

import FormNames from '@components/MultipleChoice/formFieldNames';

import { actionCreators } from '@redux/Exam/actions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import titulo from '@assets/img/titulos/Evaluaciones.png';
import withLoader from '@components/Loader';

import { parseResponseName } from './utils';
import ExamExcercises from './examExcercises';
import styles from './styles.scss';

class Exam extends Component {
  componentDidMount() {
    this.props.getExamInfo();
  }

  onSubmit = () => {
    const exercises = this.props.exam.exercises || [];
    const body = exercises.map(({ id }) => ({
      exercise: id,
      content: this.props.answers.values[parseResponseName(id)]
    }));
    this.props.submitExamAnswer(body, () => console.log('Abrir Modal'));
  };

  render() {
    const { exam, loading } = this.props;
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
        {isempty(exam) ? (
          loading || 'No hay examenes habilitados para este curso'
        ) : (
          <ExamExcercises exam={exam} loading={loading} onSubmit={this.onSubmit} />
        )}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getExamInfo: () => dispatch(actionCreators.getExamInfo(1)),
  submitExamAnswer: (body, onFinish) => dispatch(actionCreators.submitExamAnswer(1, body, onFinish))
});

const mapStateToProps = store => ({
  currentUser: store.auth.currentUser,
  exam: get(store.exam, 'examInfo.exam') || {},
  loading: store.exam.examInfoLoading,
  userLoading: store.auth.currentUserLoading,
  answers: store.form[FormNames.MULTIPLE_CHOICE_FORM]
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(props => props.userLoading)(Exam));
