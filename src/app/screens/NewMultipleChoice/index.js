import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '@redux/ExerciseDetails/actions';

import NewMultipleChoice from './layout';

class NewMultipleChoiceContainer extends Component {
  handleCreate = values => this.props.createExercise({ ...values, guide: this.props.guide });

  render() {
    return <NewMultipleChoice onSubmit={this.handleCreate} />;
  }
}

const mapStateToProps = (store, props) => ({
  loading: store.exerciseDetails.newExerciseLoading,
  guide: props.match.path.split('/')[2]
});

const mapDispatchToProps = dispatch => ({
  createExercise: body => dispatch(actionCreators.createExercise(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMultipleChoiceContainer);
