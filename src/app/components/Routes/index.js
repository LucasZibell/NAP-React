import React, { lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import { history } from '../../../redux/store';
import Suspense from '../Suspense';
import Routes from '../../../constants/routes';

import AuthenticatedRoute from './components/AuthenticatedRoute';

const Login = lazy(() => import('../../screens/Login'));
const Home = lazy(() => import('../../screens/Home'));

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <Suspense>
        <Switch>
          <AuthenticatedRoute isPublicRoute exact path={Routes.LOGIN} component={Login} />
          <AuthenticatedRoute isPrivateRoute exact path={Routes.HOME} component={Home} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
}

export default AppRoutes;
