import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { initialAuth } from './actions/auth';
import configureStore from './store/configureStore';
import AppRouter from './components/router/AppRouter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import { auth } from './actions/auth';
const store = configureStore();

// mui theme for mat ui

// const muiTheme = getMuiTheme({
//   flatButton: {
//     textColor: '#D0E87A',
//   },
// });

// check if token exists, then set auth to 'true' (should I not do this?)
const token = localStorage.getItem('token');
if (token) {
  // DEV ONLY
  // in production, will check local storage in a component
  // if token exist, render loading view whiles making http req
  // Use this to simulate http request
  // store.dispatch(initialAuth());
  // use this for instant update
  if (token) {
    store.dispatch({
      type: 'LOG_IN',
      auth: {
        auth: true,
        token,
        loading: false,
        userID: '5a3fcda1dd8a0618c4c403f7',
      },
    });
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <AppRouter />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
