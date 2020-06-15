import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import region from './region';

export default combineReducers({
  alert,
  auth,
  profile,
  region
});
