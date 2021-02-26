import { createStore } from "vuex";

import authModule from "./modules/auth/index";
import userModule from "./modules/user/index";
import songModule from "./modules/song/index";
import playlistModule from "./modules/playlist/index";

const store = createStore({
  modules: {
    auth: authModule,
    user: userModule,
    song: songModule,
    playlist: playlistModule,
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
