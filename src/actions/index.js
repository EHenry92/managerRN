export const EMAIL_CHANGE = 'email_changed';


export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGE,
    text
  }
}
