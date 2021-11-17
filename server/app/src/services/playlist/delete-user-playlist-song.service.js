import { DELETE_USER_PLAYLIST_SONG } from "../../config/api-uri.js";

const deleteUserPlaylistSongService = async ({
  playlistId,
  songId,
  userId,
  token,
}) => {
  const uri = DELETE_USER_PLAYLIST_SONG.replace(":userId", `${userId}`)
    .replace(":playlistId", `${playlistId}`)
    .replace(":songId", `${songId}`);
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

export default deleteUserPlaylistSongService;
