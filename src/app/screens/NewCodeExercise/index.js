import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { actionCreators } from '@redux/ExerciseDetails/actions';

import NewCodeExercise from './layout';

const arrayToYaml = (cells, key) =>
  Object.keys(cells)
    .filter(elem => elem.includes(key))
    .map(elem => cells[elem])
    .reduce(
      (acc, { x, y, red, green, blue, black }) =>
        `${acc}    cell ${x} ${y} Azul ${blue} Rojo ${red} Negro ${black} Verde ${green}\n`,
      ''
    );

class NewCodeExerciseContainer extends Component {
  state = { x: 2, y: 2 };

  handleXChange = event => this.setState({ x: Math.min(event.target.value % 10, 5) || 1 });

  handleYChange = event => this.setState({ y: Math.min(event.target.value % 10, 5) || 1 });

  handleCreate = values => {
    const { cells } = this.props;
    const { x: sizeX, y: sizeY } = this.state;
    const initialYaml = arrayToYaml(cells, 'initial');
    const finalYaml = arrayToYaml(cells, 'final');

    const test = `examples:\n - initial_board: |\n    GBB/1.0\n    size ${sizeX} ${sizeY}\n${initialYaml}    head 0 0\n   final_board: |\n    GBB/1.0\n    size ${sizeX} ${sizeY}\n${finalYaml}    head 0 0`;

    this.props.createExercise({ ...values, guide: this.props.guides[this.props.guideName], test });
  };

  render() {
    return (
      <NewCodeExercise
        onSubmit={this.handleCreate}
        x={this.state.x}
        y={this.state.y}
        handleXChange={this.handleXChange}
        handleYChange={this.handleYChange}
      />
    );
  }
}

const mapStateToProps = (store, props) => ({
  loading: store.exerciseDetails.newExerciseLoading,
  guideName: props.match.path.split('/')[2],
  guides: get(store.auth, 'currentUser.user.guides'),
  cells: get(store.form, 'new_code_exercise.values')
});

const mapDispatchToProps = dispatch => ({
  createExercise: body => dispatch(actionCreators.createCodeExercise(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCodeExerciseContainer);
