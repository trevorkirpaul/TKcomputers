import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import partsCPUReducer from '../reducers/partsCPU';
import auth from '../reducers/auth';
import adminServerReducer from '../reducers/adminServerReducer';
import loadViewReducer from '../reducers/viewDB/loadViewReducer';
import viewMoreItemReducer from '../reducers/viewDB/viewMoreItem';
import profile from '../reducers/profile/profile';
import PreBuiltCreator from '../reducers/PreBuiltCreator';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      partsCPU: partsCPUReducer,
      form: formReducer,
      auth,
      adminServer: adminServerReducer,
      adminViewItems: loadViewReducer,
      viewMoreItem: viewMoreItemReducer,
      profile,
      PreBuiltCreator,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
