import React, { lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

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

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <Suspense>
        <Switch>
          <AuthenticatedRoute isPublicRoute exact path={Routes.LOGIN} component={Login} />
          <AuthenticatedRoute isPrivateRoute exact path={Routes.HOME} component={Home} />
          <AuthenticatedRoute isPrivateRoute exact path={Routes.PROFILE} component={Profile} />
          <AuthenticatedRoute
            isPrivateRoute
            exact
            path={Routes.COMPUTER_SCIENCE_GUIDE}
            component={ComputerScienceGuide}
          />
          <AuthenticatedRoute isPrivateRoute exact path={Routes.ALGORITHM_GUIDE} component={AlgorithmGuide} />
          <AuthenticatedRoute isPrivateRoute exact path={Routes.ROBOTICS_GUIDE} component={RoboticsGuide} />
          <AuthenticatedRoute
            isPrivateRoute
            exact
            path={Routes.EXERCISE_DETAILS}
            component={ExerciseDetails}
          />
          <AuthenticatedRoute isPrivateRoute exact path={Routes.EXAM} component={Exam} />
          <AuthenticatedRoute isPrivateRoute exact path={Routes.EXAM_LIST} component={ExamList} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
}

export default AppRoutes;
