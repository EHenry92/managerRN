import {EMAIL_CHANGE, PASS_CHANGE, LOGIN_USER, LOGIN_FAIL, LOGIN_IN_PROCESS} from '../actions/types';

const defaultState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return {...state, email: action.email};
    case PASS_CHANGE:
      return {...state, password: action.password};
    case LOGIN_USER:
      return {...state, ...defaultState, user: action.user}
    case LOGIN_FAIL:
      return {...state,
          error: 'Authentication Failed.',
          password: '',
          loading: false
        }
    case LOGIN_IN_PROCESS:
        return {...state,
          error: '',
          loading: true
        }
    default:
      return state;
  }
}
