export default {
  setToken(state, { token }) {
    state.token = token;
  },
  setUserAuth(state, { id, username, email, role }) {
    state.userId = id;
    state.username = username;
    state.email = email;
    state.role = role;
  },
};
