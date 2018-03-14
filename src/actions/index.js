import {EMAIL_CHANGE, PASS_CHANGE} from './types';
import firebase from 'firebase';
export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGE,
    email
  };
};

export const passChanged = (password) => ({
  type: PASS_CHANGE,
  password
});

export const loginUser = ({email, password}) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => {
    dispatch({type: 'LOGIN_USER_SUCCESS', user});
  });
};
