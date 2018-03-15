import {combineReducers} from 'redux';
import auth from './auth';
import employeeForm from './employeeForm';

export default combineReducers({
  auth, employeeForm
});

