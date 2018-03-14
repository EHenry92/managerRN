import {EMAIL_CHANGE, PASS_CHANGE, LOGIN_USER, LOGIN_FAIL} from './types';
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

export const loginIn = (user) => ({
  type: LOGIN_USER,
  user
});

export const showErr = (err) => ({
  type: LOGIN_FAIL,
  err
})

export const loginUser = ({email, password}) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user =>
    dispatch(loginIn(user))
  )
  .catch(() => {
    throw firebase.auth().createUserWithEmailAndPassword(email, password)
  })
  .then(newUser =>
    dispatch(loginIn(newUser))
  )
  .catch(err =>
    dispatch(showErr(err))
  );
};
