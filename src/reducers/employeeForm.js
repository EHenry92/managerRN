import {EMPLOYEE_UPDATE, RESET_FORM} from '../actions/types';

const defaultState = {
  shift: '',
  phone: '',
  name: ' '
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.data.prop]: action.data.value};
    case RESET_FORM:
      return defaultState;
    default:
      return state;
  }
}
