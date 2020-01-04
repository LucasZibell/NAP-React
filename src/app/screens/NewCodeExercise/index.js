import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { actionCreators } from '@redux/ExerciseDetails/actions';

import NewCodeExercise from './layout';

class NewCodeExerciseContainer extends Component {
  handleCreate = values => console.log(values);

  render() {
    return <NewCodeExercise onSubmit={this.handleCreate} />;
  }
}

const mapStateToProps = (store, props) => ({
  loading: store.exerciseDetails.newExerciseLoading,
  guideName: props.match.path.split('/')[2],
  guides: get(store.auth, 'currentUser.user.guides')
});

const mapDispatchToProps = dispatch => ({
  createExercise: body => dispatch(actionCreators.createCodeExercise(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCodeExerciseContainer);
