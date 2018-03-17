import {combineReducers} from 'redux';
import auth from './auth';
import employeeForm from './employeeForm';
import employeeList from './employeeList';

export default combineReducers({
  auth, employeeForm, employeeList
});

