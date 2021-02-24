import { createStore } from "vuex";

import authModule from "./modules/auth/index";

const store = createStore({
  modules: {
    auth: authModule,
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
