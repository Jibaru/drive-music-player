import { createFormUrlEncoded } from "../../utils/fetch.utils.js";
import { CREATE_USER_PLAYLIST } from "../../config/api-uri.js";

const createUserPlaylistService = async (name, userId, token) => {
  const uri = CREATE_USER_PLAYLIST.replace(":userId", `${userId}`);
  const response = await fetch(process.env.VUE_APP_API_BASE + uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      token: token,
    },
    body: createFormUrlEncoded({
      name,
    }),
  });
  const data = await response.json();
  if (response.ok) {
    return data.message;
  } else {
    throw new Error(data.error);
  }
};

export default createUserPlaylistService;
