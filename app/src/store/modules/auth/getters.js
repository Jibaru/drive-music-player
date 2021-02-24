export default {
  token(state) {
    return state.token;
  },
  userAuth(state) {
    return {
      username: state.username,
      email: state.email,
      role: state.role,
    };
  },
  isPreRegistered(state) {
    return state.isPreRegistered;
  },
  registered(state) {
    return state.registered;
  },
};
