import React, { Component } from 'react';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import MultipleChoice from '@components/MultipleChoice';
import BlockCode from '@components/BlockCode';
import { actionCreators } from '@redux/ExerciseDetails/actions';
import ExerciseResult from '@components/ExerciseResult';
import { PASSED } from '@constants/exercise';

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

  onFinishBlockExc = response => this.onFinish(response.results.status === PASSED);

  onError = () => toast.error('Hubo un error enviando la solucion. Intente denuevo mas tarde');

  onSubmit = value => this.props.submitAnswer(this.props.match.params.id, value.answer, this.onFinish);

  onFinish = success => this.setState(prevState => ({ isOpen: !prevState.isOpen, success }));

  toggleModal = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { loading, exerciseInfo, goToExcList } = this.props;
    const { isOpen, success } = this.state;
    return (
      <div className="column">
        <br />
        {!get(exerciseInfo, 'exercise.multipleChoice') ? (
          <BlockCode
            title={get(exerciseInfo, 'exercise.name')}
            description={get(exerciseInfo, 'exercise.description')}
            size={get(exerciseInfo, 'exercise.size')}
            initialBoard={get(exerciseInfo, 'exercise.initial_board')}
            finalBoard={get(exerciseInfo, 'exercise.final_board')}
            onFinish={this.onFinishBlockExc}
            onError={this.onError}
          />
        ) : (
          <MultipleChoice
            options={get(exerciseInfo, 'exercise.options') || []}
            title={get(exerciseInfo, 'exercise.name')}
            description={get(exerciseInfo, 'exercise.description')}
            imageUrl={get(exerciseInfo, 'exercise.image')}
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
