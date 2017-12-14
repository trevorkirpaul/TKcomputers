import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {reducer as formReducer} from 'redux-form';
import partsCPUReducer from '../reducers/partsCPU';
import auth from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      partsCPU: partsCPUReducer,
      form: formReducer,
      auth
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
