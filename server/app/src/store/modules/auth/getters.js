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
  isAuthenticated(state, getters) {
    return state.userId !== null && getters.hasTokenExpired;
  },
  hasRootDriveKey(state) {
    return state.rootDriveKey !== null;
  },
  rootDriveKey(state) {
    return state.rootDriveKey;
  },
  hasTokenExpired(state) {
    return (
      state.expirationDate &&
      state.expirationDate.getTime() > new Date().getTime()
    );
  },
};
