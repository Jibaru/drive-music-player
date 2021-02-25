import { createStore } from "vuex";

import authModule from "./modules/auth/index";
import userModule from "./modules/user/index";

const store = createStore({
  modules: {
    auth: authModule,
    user: userModule,
  },
  state() {
    return {
      globalSnackBarMessage: null,
    };
  },
  mutations: {
    setGlobalSnackBarMessage(state, { message }) {
      state.globalSnackBarMessage = message;
    },
  },
  actions: {
    showGlobalSnackBarMessage(context, { message }) {
      context.commit("setGlobalSnackBarMessage", { message });
    },
    disposeGlobalSnackbarMessage(context) {
      context.commit("setGlobalSnackBarMessage", { message: null });
    },
  },
  getters: {
    globalSnackBarMessage(state) {
      return state.globalSnackBarMessage;
    },
  },
});

export default store;
