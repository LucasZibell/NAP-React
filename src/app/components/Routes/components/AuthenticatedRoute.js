import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Routes from '@constants/routes';

import NavBar from '../../NavBar';

const DEFAULT_PUBLIC_ROUTE = Routes.LOGIN;
const DEFAULT_PRIVATE_ROUTE = Routes.HOME;

function AuthenticatedRoute({ isPublicRoute, isPrivateRoute, currentUser, component: Comp, ...props }) {
  return (
    <Route
      {...props}
      // eslint-disable-next-line react/jsx-no-bind
      render={routeProps => {
        if (currentUser) {
          if (isPublicRoute) {
            return (
              <Redirect
                to={{
                  pathname: DEFAULT_PRIVATE_ROUTE,
                  state: { from: props.location }
                }}
              />
            );
          }
        } else if (isPrivateRoute) {
          return (
            <Redirect
              to={{
                pathname: DEFAULT_PUBLIC_ROUTE,
                state: { from: props.location }
              }}
            />
          );
        }
        return (
          <div className="column full-width">
            {isPrivateRoute && <NavBar />}
            <Comp {...routeProps} />
          </div>
        );
      }}
    />
  );
}

AuthenticatedRoute.propTypes = {
  ...Route.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
  currentUser: PropTypes.bool,
  isPrivateRoute: PropTypes.bool,
  isPublicRoute: PropTypes.bool
};

const mapStateToProps = store => ({
  currentUser: store.auth.currentUser
});

export default withRouter(connect(mapStateToProps)(AuthenticatedRoute));
