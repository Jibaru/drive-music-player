import { INCREASE_TIMES_PLAYED_BY_ONE_USER_SONG } from "../../config/api-uri.js";

const increaseTimesPlayedByOneUserSongService = async ({
  userId,
  songId,
  token,
}) => {
  const uri = INCREASE_TIMES_PLAYED_BY_ONE_USER_SONG.replace(
    ":userId",
    `${userId}`
  ).replace(":songId", `${songId}`);
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

export default increaseTimesPlayedByOneUserSongService;
