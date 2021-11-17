import { createFormUrlEncoded } from "../../utils/fetch.utils.js";
import { CREATE_USER_PLAYLIST_SONG } from "../../config/api-uri.js";

const createUserPlaylistSongService = async ({
  playlistId,
  songId,
  userId,
  token,
}) => {
  const uri = CREATE_USER_PLAYLIST_SONG.replace(":userId", `${userId}`).replace(
    ":playlistId",
    `${playlistId}`
  );
  const response = await fetch(process.env.VUE_APP_API_BASE + uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      token: token,
    },
    body: createFormUrlEncoded({
      songId,
    }),
  });
  const data = await response.json();
  if (response.ok) {
    return data.message;
  } else {
    throw new Error(data.error);
  }
};

export default createUserPlaylistSongService;
