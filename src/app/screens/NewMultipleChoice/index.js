import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { actionCreators } from '@redux/ExerciseDetails/actions';

import NewMultipleChoice from './layout';

class NewMultipleChoiceContainer extends Component {
  handleCreate = values =>
    this.props.createExercise({ ...values, guide: this.props.guides[this.props.guideName] });

  render() {
    return <NewMultipleChoice onSubmit={this.handleCreate} />;
  }
}

const mapStateToProps = (store, props) => ({
  loading: store.exerciseDetails.newExerciseLoading,
  guideName: props.match.path.split('/')[2],
  guides: get(store.auth, 'currentUser.user.guides')
});

const mapDispatchToProps = dispatch => ({
  createExercise: body => dispatch(actionCreators.createExercise(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMultipleChoiceContainer);
