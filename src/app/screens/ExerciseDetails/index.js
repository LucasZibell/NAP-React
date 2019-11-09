import React, { Component } from 'react';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import MultipleChoice from '@components/MultipleChoice';
import BlockCode from '@components/BlockCode';
import { actionCreators } from '@redux/ExerciseDetails/actions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExerciseResult from '@components/ExerciseResult';

class ExerciseDetails extends Component {
  state = { isOpen: false, success: false, loading: false };

  componentDidMount() {
    this.props.getExerciseInfo(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    const isBlockExc = !get(nextProps.exerciseInfo, 'exercise.multipleChoice');
    const needsReRender = this.props.needReRender;
    if (isBlockExc && needsReRender) {
      location.reload();
    }
  }

  componentWillUnmount() {
    this.props.clearExercise();
  }

  onSubmit = value => this.props.submitAnswer(this.props.match.params.id, value.answer, this.onFinish);

  onFinish = success => this.setState(prevState => ({ isOpen: !prevState.isOpen, success }));

  toggleModal = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { loading, exerciseInfo, goToExcList } = this.props;
    const { isOpen, success } = this.state;
    return (
      <div className="column">
        <br />
        <Grid container spacing={3}>
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Typography variant="h6" gutterBottom>
              Bienvenido al ejercicio
            </Typography>
          </Grid>
        </Grid>
        {!get(exerciseInfo, 'exercise.multipleChoice') ? (
          <BlockCode
            title={get(exerciseInfo, 'exercise.name')}
            description={get(exerciseInfo, 'exercise.description')}
            size={get(exerciseInfo, 'exercise.size')}
            initialBoard={get(exerciseInfo, 'exercise.initial_board')}
            finalBoard={get(exerciseInfo, 'exercise.final_board')}
          />
        ) : (
          <MultipleChoice
            options={get(exerciseInfo, 'exercise.options') || []}
            title={get(exerciseInfo, 'exercise.name')}
            description={get(exerciseInfo, 'exercise.description')}
            onSubmit={this.onSubmit}
            loading={loading}
          />
        )}
        <ExerciseResult
          isOpen={isOpen}
          success={success}
          closeModal={this.toggleModal}
          goToExerciseList={goToExcList}
        />
      </div>
    );
  }
}

ExerciseDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  }),
  getExerciseInfo: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  exerciseInfo: PropTypes.shape({})
};

const mapStateToProps = store => ({
  exerciseInfo: store.exerciseDetails.exerciseInfo,
  loading: store.exerciseDetails.exerciseInfoLoading,
  needReRender: store.exerciseDetails.needReRender
});

const mapDispatchToProps = dispatch => ({
  getExerciseInfo: id => dispatch(actionCreators.getExerciseInfo(id)),
  submitAnswer: (id, answer, onFinish) => dispatch(actionCreators.submitAnswer(id, answer, onFinish)),
  goToExcList: () => dispatch(goBack()),
  clearExercise: () => dispatch(actionCreators.clearExercise())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseDetails);
