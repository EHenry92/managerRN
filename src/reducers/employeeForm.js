import {EMPLOYEE_UPDATE} from '../actions/types';

const defaultState = {
  shift: '',
  phone: '',
  name: ' '
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.data.prop]: action.data.value};
    default:
      return state;
  }
}
