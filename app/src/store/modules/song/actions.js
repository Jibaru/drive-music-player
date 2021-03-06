import getUserSongsService from "../../../services/song/get-user-songs.service.js";
import updateFavoriteUserSongService from "../../../services/song/update-favorite-user-song.service.js";
import setDurationUserSongService from "../../../services/song/set-duration-user-song.service.js";
import increaseTimesPlayedByOneUserSongService from "../../../services/song/increase-times-played-by-one-user-song.service.js";

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
  async toggleSongFavorite(context, { songId, val }) {
    try {
      const userId = context.rootGetters["auth/userId"];
      const token = context.rootGetters["auth/token"];
      const message = await updateFavoriteUserSongService({
        userId,
        songId,
        isFavorite: val,
        token,
      });

      context.commit("toggleSongFavorite", { songId, val });
      context.dispatch(
        "currentPlayback/toggleSongInPlaybackFavorite",
        { songId, val },
        { root: true }
      );
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message },
        { root: true }
      );
    } catch (error) {
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message: error.message },
        { root: true }
      );
    }
  },
  addPlaylistIdToSong(context, { playlistId, songId }) {
    context.commit("addPlaylistIdToSong", { playlistId, songId });
  },
  removePlaylistIdFromSong(context, { playlistId, songId }) {
    context.commit("removePlaylistIdFromSong", { playlistId, songId });
  },
  async updateSongDuration(context, { songId, duration }) {
    try {
      const userId = context.rootGetters["auth/userId"];
      const token = context.rootGetters["auth/token"];
      await setDurationUserSongService({
        userId,
        songId,
        duration,
        token,
      });

      context.commit("setSongDuration", { songId, duration });
    } catch (error) {
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message: error.message },
        { root: true }
      );
    }
  },
  async increaseSongTimesPlayedByOne(context, { songId }) {
    try {
      const userId = context.rootGetters["auth/userId"];
      const token = context.rootGetters["auth/token"];
      await increaseTimesPlayedByOneUserSongService({
        userId,
        songId,
        token,
      });

      context.commit("increaseSongTimesPlayedByOne", { songId });
      context.dispatch(
        "currentPlayback/increasePlaybackSongTimesPlayedByOne",
        { songId },
        { root: true }
      );
    } catch (error) {
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message: error.message },
        { root: true }
      );
    }
  },
};
