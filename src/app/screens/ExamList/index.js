import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { actionCreators } from '@redux/Exam/actions';
import titulo from '@assets/img/titulos/Evaluaciones.png';
import Text from '@components/Text';
import GuideList from '@components/GuideList';

class Exams extends Component {
  componentDidMount() {
    this.props.getExamList();
  }

  render() {
    const { examList } = this.props;
    return (
      <Fragment>
        <img src={titulo} alt="titulo" width={400} />
        <GuideList excerciseList={examList || []} exams />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getExamList: () => dispatch(actionCreators.getExamList())
});

const mapStateToProps = store => ({
  examList: get(store.exam.examList, 'exams') || []
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exams);
