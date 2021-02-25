import getUserSongsService from "../../../services/song/get-user-songs.service.js";

export default {
  async fetchSongs(context) {
    context.commit("setIsFetching", { val: true });
    try {
      const userId = context.rootGetters["auth/userId"];
      const token = context.rootGetters["auth/token"];

      const songs = await getUserSongsService(userId, token);
      context.commit("setSongs", { songs });
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