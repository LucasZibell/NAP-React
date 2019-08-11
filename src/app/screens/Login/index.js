import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

import { actionCreators } from '@redux/Auth/actions';
import { getCurrentUser } from '@services/AuthServices';
import { HOME } from '@constants/routes';

import Login from './layout';

class LoginContainer extends Component {
  componentDidMount = () => {
    getCurrentUser().then(async response => {
      if (response) {
        await this.props.init();
        this.props.redirectHome();
      }
    });
  };

  handleLogin = body => this.props.login(body);

  render() {
    return <Login onSubmit={this.handleLogin} />;
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  redirectHome: PropTypes.func,
  init: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  login: body => dispatch(actionCreators.login(body)),
  init: () => dispatch(actionCreators.init()),
  redirectHome: () => dispatch(push(HOME))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
