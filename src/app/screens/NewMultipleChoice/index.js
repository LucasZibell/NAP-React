import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { toast } from 'react-toastify';

import { actionCreators } from '@redux/ExerciseDetails/actions';

import NewMultipleChoice from './layout';

class NewMultipleChoiceContainer extends Component {
  handleCreate = values =>
    this.props.createExercise({
      ...values,
      image: this.state.image,
      guide: this.props.guides[this.props.guideName]
    });

  handleLoadImage = file => {
    this.setState({ image: file[0] });
    const reader = new FileReader();

    reader.onload = e => {
      document.getElementById('img-exc').setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(file[0]);

    toast.success('Imagen cargada con exito');
  };

  render() {
    return <NewMultipleChoice onSubmit={this.handleCreate} handleLoadImage={this.handleLoadImage} />;
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
