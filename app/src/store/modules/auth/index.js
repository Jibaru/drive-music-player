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
      isPreRegistered: false,
    };
  },
  mutations,
  actions,
  getters,
};
