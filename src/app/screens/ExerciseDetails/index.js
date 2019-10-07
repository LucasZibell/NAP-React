import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Text from '@components/Text';
import MultipleChoice from '@components/MultipleChoice';
import { actionCreators } from '@redux/ExerciseDetails/actions';

class ExerciseDetails extends Component {
  componentDidMount() {
    this.props.getExerciseInfo(this.props.match.params.id);
  }

  render() {
    const { loading, exerciseInfo } = this.props;
    return (
      <div className="column">
        <Text>Bienvenido al ejercicio</Text>
        {loading ? (
          'Cargando...'
        ) : (
          <MultipleChoice
            options={exerciseInfo.options || []}
            title={exerciseInfo.title}
            description={exerciseInfo.description}
          />
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
