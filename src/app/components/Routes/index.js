import React, { Component, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { actionCreators } from '@redux/Auth/actions';

import { history } from '../../../redux/store';
import Suspense from '../Suspense';
import Routes from '../../../constants/routes';

import AuthenticatedRoute from './components/AuthenticatedRoute';

const Login = lazy(() => import('../../screens/Login'));
const Home = lazy(() => import('../../screens/Home'));
const Profile = lazy(() => import('../../screens/Profile'));
const ComputerScienceGuide = lazy(() => import('../../screens/ComputerScienceGuide'));
const RoboticsGuide = lazy(() => import('../../screens/RoboticsGuide'));
const AlgorithmGuide = lazy(() => import('../../screens/AlgorithmGuide'));
const Exam = lazy(() => import('../../screens/Exam'));
const ExamList = lazy(() => import('../../screens/ExamList'));
const ExerciseDetails = lazy(() => import('../../screens/ExerciseDetails'));
const NewMultipleChoice = lazy(() => import('../../screens/NewMultipleChoice'));
const NewCodeExercise = lazy(() => import('../../screens/NewCodeExercise'));

class AppRoutes extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Suspense>
          <Switch>
            <AuthenticatedRoute isPrivateRoute exact path={Routes.HOME} component={Home} />
            <AuthenticatedRoute isPrivateRoute exact path={Routes.PROFILE} component={Profile} />
            <AuthenticatedRoute
              isPrivateRoute
              exact
              path={Routes.COMPUTER_SCIENCE_GUIDE}
              component={ComputerScienceGuide}
            />
            <AuthenticatedRoute
              isPrivateRoute
              exact
              path={Routes.ALGORITHM_GUIDE}
              component={AlgorithmGuide}
            />
            <AuthenticatedRoute isPrivateRoute exact path={Routes.ROBOTICS_GUIDE} component={RoboticsGuide} />
            <AuthenticatedRoute
              isPrivateRoute
              exact
              path={Routes.EXERCISE_DETAILS}
              component={ExerciseDetails}
            />
            <AuthenticatedRoute isPrivateRoute exact path={Routes.EXAM} component={Exam} />
            <AuthenticatedRoute
              isPrivateRoute
              exact
              path={Routes.NEW_EXERCISE_ALGORITHM}
              component={NewMultipleChoice}
            />
            <AuthenticatedRoute
              isPrivateRoute
              exact
              path={Routes.NEW_EXERCISE_SCIENCE}
              component={NewMultipleChoice}
            />
            <AuthenticatedRoute
              isPrivateRoute
              exact
              path={Routes.NEW_EXERCISE_ROBOTICS}
              component={NewMultipleChoice}
            />
            <AuthenticatedRoute
              isPrivateRoute
              exact
              path={Routes.NEW_CODE_ALGORITHM}
              component={NewCodeExercise}
            />
            <AuthenticatedRoute
              isPrivateRoute
              exact
              path={Routes.NEW_CODE_SCIENCE}
              component={NewCodeExercise}
            />
            <AuthenticatedRoute
              isPrivateRoute
              exact
              path={Routes.NEW_CODE_ROBOTICS}
              component={NewCodeExercise}
            />
            <AuthenticatedRoute isPrivateRoute exact path={Routes.EXAM_LIST} component={ExamList} />
            <Route exact path={Routes.LOGIN} component={Login} />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(actionCreators.init())
});

export default connect(
  null,
  mapDispatchToProps
)(AppRoutes);
