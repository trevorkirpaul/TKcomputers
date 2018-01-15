import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { tokenAuth } from './actions/auth';
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
  store.dispatch(tokenAuth(token));
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
