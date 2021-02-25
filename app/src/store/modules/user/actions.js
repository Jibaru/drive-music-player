import updateUserRootDriveKeyService from "../../../services/user/update-user-root-drive-key.service.js";

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
};
