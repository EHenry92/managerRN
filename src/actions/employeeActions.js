import {EMPLOYEE_UPDATE} from './types';

export const employeeUpdate = ({prop, value}) => {
  // let data = {};
  // data.prop = value;
  return {
    type: EMPLOYEE_UPDATE,
    data: {prop, value}
  }
};
