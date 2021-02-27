import updateUserRootDriveKeyService from "../../../services/user/update-user-root-drive-key.service.js";
import refreshUserSongsService from "../../../services/user/refresh-user-songs.service.js";

export default {
  async updateRootDriveKey(context, { rootDriveKey }) {
    try {
      const userId = context.rootGetters["auth/userId"];
      const token = context.rootGetters["auth/token"];

      const data = await updateUserRootDriveKeyService(
        userId,
        rootDriveKey,
        token
      );

      context.dispatch(
        "auth/setAuthUserRootDriveKey",
        { rootDriveKey },
        { root: true }
      );
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message: data.message },
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
  async refreshDriveSongs(context) {
    context.commit("setIsRefreshingDriveSongs", { val: true });
    try {
      const userId = context.rootGetters["auth/userId"];
      const token = context.rootGetters["auth/token"];

      const message = await refreshUserSongsService(userId, token);

      context.dispatch("song/fetchSongs", null, { root: true });
      context.dispatch("playlist/fetchPlaylists", null, { root: true });
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
    } finally {
      context.commit("setIsRefreshingDriveSongs", { val: false });
    }
  },
};
