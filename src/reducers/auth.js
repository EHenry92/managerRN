import {EMAIL_CHANGE, PASS_CHANGE} from '../actions/types';

const defaultState = {
  email: '',
  password: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return {...state, password: action.email};
    case PASS_CHANGE:
      return {...state, password: action.password};
    default:
      return state;
  }
}
