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

import { deleteExercise } from '@services/ExerciseService';

import ConfirmModal from './confirmModal';

class ExerciseDetails extends Component {
  state = { isOpen: false, success: false, loading: false, openConfirm: false };

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

  onError = () => toast.error('Hubo un error enviando la solucion. Intente de nuevo mas tarde');

  onSubmit = value => this.props.submitAnswer(this.props.match.params.id, value.answer, this.onFinish);

  onFinish = success => this.setState(prevState => ({ isOpen: !prevState.isOpen, success }));

  deleteExercise = () => {
    deleteExercise(this.props.match.params.id).then(
      () => {
        toast.success('Ejercicio eliminado con exito.');
        this.props.goToExcList();
      },
      () => toast.error('Hubo un error eliminando el ejercicio. Intente de nuevo mas tarde')
    );
  };

  toggleModal = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  toggleConfirm = () => this.setState(prevState => ({ openConfirm: !prevState.openConfirm }));

  render() {
    const { loading, exerciseInfo, goToExcList, match, isTeacher } = this.props;
    const { isOpen, success, openConfirm } = this.state;
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
            id={match.params.id}
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
        {isTeacher && (
          <button onClick={this.toggleConfirm} className="self-center margin-top-40 btn-cancel">
            Eliminar ejercicio
          </button>
        )}
        <ExerciseResult
          isOpen={isOpen}
          success={success}
          closeModal={this.toggleModal}
          goToExerciseList={goToExcList}
        />
        <ConfirmModal
          isOpen={openConfirm}
          closeModal={this.toggleConfirm}
          deleteExercise={this.deleteExercise}
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
  isTeacher: get(store, 'auth.currentUser.user.is_teacher'),
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
