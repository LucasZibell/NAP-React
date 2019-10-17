import React, { Component } from 'react';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import MultipleChoice from '@components/MultipleChoice';
import { actionCreators } from '@redux/ExerciseDetails/actions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { mockExc } from './constants';

class ExerciseDetails extends Component {
  componentDidMount() {
    this.props.getExerciseInfo(this.props.match.params.id);
  }

  onSubmit = value => {
    if (value.answer === this.props.mockExc.answer) {
      toast.success('Muy bien!! Opcion correcta');
    } else {
      toast.error('Esa opcion no es la correcta, intenta de vuelta');
    }
  };

  render() {
    const { loading, exerciseInfo } = this.props;
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
        <MultipleChoice
          options={mockExc.options || []}
          title={`${get(exerciseInfo, 'exercise.name')} ${mockExc.title}`}
          description={`${get(exerciseInfo, 'exercise.description')} ${mockExc.description}`}
          onSubmit={this.onSubmit}
          loading={loading}
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
  mockExc,
  exerciseInfo: store.exerciseDetails.exerciseInfo,
  loading: store.exerciseDetails.exerciseInfoLoading
});

const mapDispatchToProps = dispatch => ({
  getExerciseInfo: () => dispatch(actionCreators.getExerciseInfo(1))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseDetails);
