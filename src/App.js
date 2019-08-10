import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './scss/_application.scss';
import { apiSetup } from './config/api';
import store from './redux/store';
import Routes from './app/components/Routes';

class App extends Component {
  componentDidMount() {
    apiSetup(store.dispatch);
  }

  render() {
    return (
      <div className="row full-screen">
        <AppContainer>
          <Provider store={store}>
            <Routes />
          </Provider>
        </AppContainer>
        <ToastContainer />
      </div>
    );
  }
}

App.defaultProps = {
  loading: false
};

export default App;
