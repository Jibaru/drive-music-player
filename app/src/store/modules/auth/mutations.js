export default {
  setToken(state, { token }) {
    state.token = token;
  },
  setUserAuth(state, { id, username, email, role, rootDriveKey }) {
    state.userId = id;
    state.username = username;
    state.email = email;
    state.role = role;
    state.rootDriveKey = rootDriveKey;
  },
  setIsPreRegistered(state, { val }) {
    state.isPreRegistered = val;
  },
  setCompleteRegister(state, { val }) {
    state.registered = val;
  },
  setRootDriveKey(state, { rootDriveKey }) {
    state.rootDriveKey = rootDriveKey;
  },
};
