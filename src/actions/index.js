import {EMAIL_CHANGE, PASS_CHANGE} from './types';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGE,
    email
  };
};

export const passChanged = (password) => ({
  type: PASS_CHANGE,
  password
})
