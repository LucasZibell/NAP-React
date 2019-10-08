import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import Text from '@components/Text';
import MultipleChoice from '@components/MultipleChoice';
import { actionCreators } from '@redux/ExerciseDetails/actions';

class ExerciseDetails extends Component {
  componentDidMount() {
    this.props.getExerciseInfo(this.props.match.params.id);
  }

  onSubmit = value => {
    if (value.answer === this.props.exerciseInfo.answer) {
      toast.success('Muy bien!! Opcion correcta');
    } else {
      toast.error('Esa opcion no es la correcta, intenta de vuelta');
    }
  };

  render() {
    const { loading, exerciseInfo } = this.props;
    return (
      <div className="column">
        <Text>Bienvenido al ejercicio</Text>
        {exerciseInfo.multipleChoice ? (
          <MultipleChoice
            options={exerciseInfo.options || []}
            title={exerciseInfo.title}
            description={exerciseInfo.description}
            onSubmit={this.onSubmit}
            loading={loading}
          />
        ) : (
          'Programacion en bloques'
        )}
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
  loading: store.exerciseDetails.exerciseInfoLoading
});

const mapDispatchToProps = dispatch => ({
  getExerciseInfo: id => dispatch(actionCreators.getExerciseInfo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseDetails);
