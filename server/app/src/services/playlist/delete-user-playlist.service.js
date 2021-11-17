import { DELETE_USER_PLAYLIST } from "../../config/api-uri.js";

const deleteUserPlaylistService = async (userId, playlistId, token) => {
  const uri = DELETE_USER_PLAYLIST.replace(":userId", `${userId}`).replace(
    ":playlistId",
    `${playlistId}`
  );
  const response = await fetch(process.env.VUE_APP_API_BASE + uri, {
    method: "DELETE",
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

export default deleteUserPlaylistService;
