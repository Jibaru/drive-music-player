import {
  loginService,
  preRegisterService,
  registerService,
} from "../../../services/auth.service.js";

export default {
  async login(context, { username, password }) {
    try {
      const data = await loginService(username, password);
      context.commit("setToken", { token: data.jwt });
      context.commit("setUserAuth", data.user);

      // To Localstorage
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userAuth", JSON.stringify(data.user));

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
  tryGetLocalStorageAuth(context) {
    const token = localStorage.getItem("token");
    const userAuth = localStorage.getItem("userAuth");

    if (token && userAuth) {
      context.commit("setToken", { token });
      context.commit("setUserAuth", JSON.parse(userAuth));
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
  async register(context, { username, email, password, pin }) {
    try {
      const data = await registerService({
        username,
        email,
        password,
        pin,
      });

      context.commit("setIsPreRegistered", { val: false });
      context.commit("setCompleteRegister", { val: true });
      context.dispatch(
        "showGlobalSnackBarMessage",
        {
          message: `User ${data.user.username} succesfully registered`,
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
  newRegister(context) {
    context.commit("setCompleteRegister", { val: false });
    context.commit("setIsPreRegistered", { val: false });
  },
  setAuthUserRootDriveKey(context, { rootDriveKey }) {
    context.commit("setRootDriveKey", { rootDriveKey });

    // To Localstorage
    localStorage.setItem("userAuth", JSON.stringify(context.getters.userAuth));
  },
};
