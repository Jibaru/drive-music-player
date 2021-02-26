import getUserPlaylistsService from "../../../services/playlist/get-user-playlists.service.js";
import createUserPlaylistService from "../../../services/playlist/create-user-playlist.service.js";
import deleteUserPlaylistService from "../../../services/playlist/delete-user-playlist.service.js";

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
  async createPlaylist(context, { name }) {
    context.commit("setIsCreatingPlaylist", { val: true });
    try {
      const userId = context.rootGetters["auth/userId"];
      const token = context.rootGetters["auth/token"];

      const message = await createUserPlaylistService(name, userId, token);
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message },
        { root: true }
      );
      context.dispatch("fetchPlaylists");
    } catch (error) {
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message: error.message },
        { root: true }
      );
    } finally {
      context.commit("setIsCreatingPlaylist", { val: false });
    }
  },
  async deletePlaylist(context, { playlistId }) {
    context.commit("setIsDeletingPlaylist", { val: true });
    try {
      const userId = context.rootGetters["auth/userId"];
      const token = context.rootGetters["auth/token"];

      const message = await deleteUserPlaylistService(
        userId,
        playlistId,
        token
      );
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message },
        { root: true }
      );
      context.dispatch("fetchPlaylists");
    } catch (error) {
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message: error.message },
        { root: true }
      );
    } finally {
      context.commit("setIsDeletingPlaylist", { val: false });
    }
  },
};
