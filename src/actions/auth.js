import {EMAIL_CHANGE, PASS_CHANGE, LOGIN_USER, LOGIN_FAIL, LOGIN_IN_PROCESS} from './types';
import {Actions} from 'react-native-router-flux';
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

export const loggingin = (dispatch, user) => {
  dispatch({type: LOGIN_USER, user});
  //Navigate to group of main scene
  Actions.main();
};


export const showErr = () => ({
  type: LOGIN_FAIL
});


export const loginUser = ({email, password}) => dispatch => {
  dispatch({type: LOGIN_IN_PROCESS });
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => loggingin(dispatch, user))
  .catch(() => {
    throw firebase.auth().createUserWithEmailAndPassword(email, password);
  })
  .then(newUser => loggingin(dispatch, newUser))
  .catch(err =>
    dispatch(showErr(err))
  );
};
