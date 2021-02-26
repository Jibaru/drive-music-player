import { createFormUrlEncoded } from "../../utils/fetch.utils.js";
import { UPDATE_FAVORITE_USER_SONG } from "../../config/api-uri.js";

const updateFavoriteUserSongService = async ({
  userId,
  songId,
  isFavorite,
  token,
}) => {
  const uri = UPDATE_FAVORITE_USER_SONG.replace(":userId", `${userId}`).replace(
    ":songId",
    `${songId}`
  );
  const response = await fetch(process.env.VUE_APP_API_BASE + uri, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      token: token,
    },
    body: createFormUrlEncoded({
      isFavorite,
    }),
  });
  const data = await response.json();
  if (response.ok) {
    return data.message;
  } else {
    throw new Error(data.error);
  }
};

export default updateFavoriteUserSongService;
