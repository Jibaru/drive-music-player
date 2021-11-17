import { createFormUrlEncoded } from "../utils/fetch.utils.js";
import { LOGIN, PRE_REGISTER, REGISTER } from "../config/api-uri.js";

const loginService = async (username, password) => {
  const response = await fetch(process.env.VUE_APP_API_BASE + LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: createFormUrlEncoded({
      username,
      password,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Authentication failed");
  }
};

const preRegisterService = async (username, email, password) => {
  const response = await fetch(process.env.VUE_APP_API_BASE + PRE_REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: createFormUrlEncoded({
      username,
      email,
      password,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.error);
  }
};

const registerService = async ({ username, email, password, pin }) => {
  const response = await fetch(process.env.VUE_APP_API_BASE + REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: createFormUrlEncoded({
      username,
      email,
      password,
      pin,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.error);
  }
};

export { loginService, preRegisterService, registerService };
