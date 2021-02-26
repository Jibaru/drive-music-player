import { GET_USER_PLAYLISTS } from "../../config/api-uri.js";

const getUserPlaylistsService = async (userId, token) => {
  const uri = GET_USER_PLAYLISTS.replace(":userId", `${userId}`);
  const response = await fetch(process.env.VUE_APP_API_BASE + uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      token: token,
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data.playlists;
  } else {
    throw new Error(data.error);
  }
};

export default getUserPlaylistsService;
