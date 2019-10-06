import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '@redux/Exam/actions';

import Text from '@components/Text';

class Exams extends Component {
  componentDidMount() {
    this.props.getExamInfo();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <Text>
        {currentUser.teacher
          ? 'Bienvenido a la info del examen'
          : 'No hay examenes habilitados para este curso'}
      </Text>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getExamInfo: () => dispatch(actionCreators.getExamInfo())
});

const mapStateToProps = store => ({
  currentUser: store.auth.currentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exams);
