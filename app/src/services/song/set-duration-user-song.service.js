import { createFormUrlEncoded } from "../../utils/fetch.utils.js";
import { SET_DURATION_MILLISECONDS_USER_SONG } from "../../config/api-uri.js";

const setDurationUserSongService = async ({
  userId,
  songId,
  duration,
  token,
}) => {
  const uri = SET_DURATION_MILLISECONDS_USER_SONG.replace(
    ":userId",
    `${userId}`
  ).replace(":songId", `${songId}`);
  const response = await fetch(process.env.VUE_APP_API_BASE + uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      token: token,
    },
    body: createFormUrlEncoded({
      durationMilliseconds: duration,
    }),
  });
  const data = await response.json();
  if (response.ok) {
    return data.message;
  } else {
    throw new Error(data.error);
  }
};

export default setDurationUserSongService;
