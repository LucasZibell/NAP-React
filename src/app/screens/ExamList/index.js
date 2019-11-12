import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';

import { actionCreators } from '@redux/Exam/actions';
import titulo from '@assets/img/titulos/Evaluaciones.png';
import GuideList from '@components/GuideList';
import withLoader from '@components/Loader';

class Exams extends Component {
  componentDidMount() {
    if (this.props.currentUser) {
      if (this.props.currentUser.is_teacher) {
        this.props.getExamList();
      } else {
        this.props.getAvailableExams();
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser !== this.props.currentUser) {
      if (nextProps.currentUser.is_teacher) {
        this.props.getExamList();
      } else {
        this.props.getAvailableExams();
      }
    }
  }

  render() {
    const { examList, loading } = this.props;
    return (
      <Fragment>
        <img src={titulo} alt="titulo" width={400} />
        <GuideList
          title="Examenes"
          description="En este listado vas a encontrar todos los examenes disponibles para este curso"
          excerciseList={examList.map(({ exam }) => ({
            id: exam.id,
            title: exam.name,
            description: exam.description
          }))}
          exams
          loading={loading}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getExamList: () => dispatch(actionCreators.getExamList()),
  getAvailableExams: () => dispatch(actionCreators.getAvailableExams())
});

const mapStateToProps = store => ({
  examList: get(store.exam.examList, 'exams') || [],
  loading: store.exam.examListLoading,
  userLoading: store.auth.currentUserLoading,
  currentUser: get(store.auth, 'currentUser.user')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(props => props.userLoading)(Exams));
