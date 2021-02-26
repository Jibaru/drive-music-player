import getUserPlaylistsService from "../../../services/playlist/get-user-playlists.service.js";

export default {
  async fetchPlaylists(context) {
    context.commit("setIsFetching", { val: true });
    try {
      const userId = context.rootGetters["auth/userId"];
      const token = context.rootGetters["auth/token"];

      const playlists = await getUserPlaylistsService(userId, token);
      context.commit("setPlaylists", { playlists });
    } catch (error) {
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message: error.message },
        { root: true }
      );
    } finally {
      context.commit("setIsFetching", { val: false });
    }
  },
};
