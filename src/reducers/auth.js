import {EMAIL_CHANGE, PASS_CHANGE, LOGIN_USER, LOGIN_FAIL} from '../actions/types';

const defaultState = {
  email: '',
  password: '',
  user: null,
  err: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return {...state, email: action.email};
    case PASS_CHANGE:
      return {...state, password: action.password};
    case LOGIN_USER:
      return {...state, user: action.user}
    case LOGIN_FAIL:
      return {...state, error: err}
    default:
      return state;
  }
}
