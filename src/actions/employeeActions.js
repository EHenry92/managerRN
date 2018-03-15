import {EMPLOYEE_UPDATE, RESET_FORM} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
  // let data = {};
  // data.prop = value;
  return {
    type: EMPLOYEE_UPDATE,
    data: {prop, value}
  };
};

export const employeeCreate = ({name, phone, shift}) => dispatch => {
  const {currentUser} = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({name, phone, shift})
  .then(() => {
    dispatch({type: RESET_FORM});
    Actions.pop();
  });
};
