import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '@redux/ExerciseDetails/actions';

import styles from './styles.scss';

class BoardCell extends Component {
  render() {
    const { x, y } = this.props;
    return (
      <div className={styles.cellContainer}>
        <span>{`${x}${y}`}</span>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  createExercise: body => dispatch(actionCreators.createCodeExercise(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCell);
