import {EMPLOYEE_FETCH} from '../actions/types';

let defaultState = {
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH:
      return action.employees;
    default:
      return state;
  }
}
