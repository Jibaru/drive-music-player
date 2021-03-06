import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      token: null,
      userId: null,
      username: null,
      email: null,
      role: null,
      rootDriveKey: null,
      isPreRegistered: false,
      registered: false,
      expirationDate: null,
    };
  },
  mutations,
  actions,
  getters,
};
