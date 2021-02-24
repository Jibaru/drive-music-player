import {
  loginService,
  preRegisterService,
} from "../../../services/auth.service.js";

export default {
  async login(context, { username, password }) {
    try {
      const data = await loginService(username, password);
      context.commit("setToken", { token: data.jwt });
      context.commit("setUserAuth", data.user);

      context.dispatch(
        "showGlobalSnackBarMessage",
        {
          message: "Authenticated",
        },
        {
          root: true,
        }
      );
    } catch (error) {
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message: error.message },
        {
          root: true,
        }
      );
    }
  },
  async preRegister(context, { username, email, password }) {
    try {
      const data = await preRegisterService(username, email, password);
      context.commit("setIsPreRegistered", { val: true });
      context.dispatch(
        "showGlobalSnackBarMessage",
        {
          message: data.message,
        },
        {
          root: true,
        }
      );
    } catch (error) {
      context.dispatch(
        "showGlobalSnackBarMessage",
        { message: error.message },
        {
          root: true,
        }
      );
    }
  },
};
