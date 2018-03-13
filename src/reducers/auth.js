const defaultState = {
  email: '',
  password: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'email_change':
      return {
        email: action.email,
        password: state.password
      };
    default:
      return state;
  }
}
