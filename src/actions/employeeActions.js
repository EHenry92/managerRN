import {EMPLOYEE_UPDATE, RESET_FORM, EMPLOYEE_FETCH} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
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

export const employeesFetch = () => dispatch => {
  const {currentUser} = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    //any time data comes across, call this function with an object to describe the data(snapshot)
    //Persistent throughtout application lifecyclye
    //whill automatically dispatch action any time new data is added
    .on('value', snapshot => {
      dispatch({type: EMPLOYEE_FETCH, employees: snapshot.val()});
    });
};

export const employeeEdit = ({name, phone, shift, uid}) => dispatch => {
  const {currentUser} = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
  .set({name, phone, shift})
  .then(() => {
    dispatch({type: RESET_FORM});
    Actions.pop();
  });
  //Actions.employeeList({type: 'reset'})
};

export const employeeDelete = ({uid}) => dispatch => {
  const {currentUser} = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
  .remove()
  .then(() => {
    dispatch({type: RESET_FORM});
    Actions.pop();
  });
}
