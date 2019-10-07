import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Text from '@components/Text';
import { actionCreators } from '@redux/ExerciseDetails/actions';

class ExerciseDetails extends Component {
  componentDidMount() {
    this.props.getExerciseInfo(this.props.match.params.id);
    // const script = document.createElement('script');

    // script.src = 'http://localhost:9292/assets/editor/editor.js';
    // script.async = true;

    // document.body.appendChild(script);
  }

  render() {
    const { loading, exerciseInfo } = this.props;
    return (
      <div className="column">
        <Text>Bienvenido al ejercicio</Text>
        <link rel="stylesheet" href="http://localhost:9292/assets/editor/editor.css" />
        <script src="http://localhost:9292/assets/editor/editor.js" />
        <link rel="import" href="http://localhost:9292/assets/polymer.html" />
        <link rel="import" href="http://localhost:9292/assets/gs-board.html" />
        <link rel="import" href="http://localhost:9292/assets/editor/editor.html" />
        <div className="row space-between">
          <gs-element-blockly />
          <gs-board size='{ "x": 4, "y": 4 }' header='{ "x": 1, "y": 3 }' />
          <gs-board size='{ "x": 4, "y": 4 }' header='{ "x": 1, "y": 1 }' />
        </div>
        <button className="kids-submit-button"> Mandar solucion</button>
        {loading ? (
          'Cargando...'
        ) : (
          <Fragment>
            <Text>{exerciseInfo.id}</Text>
            <Text>{exerciseInfo.title}</Text>
            <Text>{exerciseInfo.description}</Text>
          </Fragment>
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
  getExerciseInfo: () => dispatch(actionCreators.getExerciseInfo(1))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseDetails);
