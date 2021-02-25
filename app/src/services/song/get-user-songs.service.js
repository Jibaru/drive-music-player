import { GET_USER_SONGS } from "../../config/api-uri.js";

const getUserSongsService = async (userId, token) => {
  const uri = GET_USER_SONGS.replace(":userId", `${userId}`);
  const response = await fetch(process.env.VUE_APP_API_BASE + uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      token: token,
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data.songs;
  } else {
    throw new Error(data.error);
  }
};

export default getUserSongsService;
