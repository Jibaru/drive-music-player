export default {
  token(state) {
    return state.token;
  },
  userAuth(state) {
    return {
      id: state.userId,
      username: state.username,
      email: state.email,
      role: state.role,
      rootDriveKey: state.rootDriveKey,
    };
  },
  userId(state) {
    return state.userId;
  },
  isPreRegistered(state) {
    return state.isPreRegistered;
  },
  registered(state) {
    return state.registered;
  },
  isAuthenticated(state) {
    return state.userId !== null;
  },
  hasRootDriveKey(state) {
    return state.rootDriveKey !== null;
  },
};
