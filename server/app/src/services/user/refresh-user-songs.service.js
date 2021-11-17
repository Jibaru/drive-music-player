import { REFRESH_USER_SONGS } from "../../config/api-uri.js";

const refreshUserSongsService = async (userId, token) => {
  const uri = REFRESH_USER_SONGS.replace(":userId", `${userId}`);
  const response = await fetch(process.env.VUE_APP_API_BASE + uri, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      token: token,
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data.message;
  } else {
    throw new Error(data.error);
  }
};

export default refreshUserSongsService;
