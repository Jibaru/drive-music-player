import { createFormUrlEncoded } from "../utils/fetch.utils.js";
import { LOGIN } from "../config/api-uri.js";

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

export { loginService };
