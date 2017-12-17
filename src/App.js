import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './components/router/AppRouter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getMuiTheme } from 'material-ui/styles';

const store = configureStore();

// mui theme for mat ui

const muiTheme = getMuiTheme({
  flatButton: {
    textColor: '#D0E87A',
  },
});

// check if token exists, then set auth to 'true' (should I not do this?)
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({
    type: 'LOG_IN',
    auth: { auth: true, token, loading: false },
  });
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppRouter />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
