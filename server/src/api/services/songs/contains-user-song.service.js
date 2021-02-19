const { Song } = require("../../../db/models/index");

const containsUserSongService = async ({ songId, userId }) => {
  const songFinded = await Song.findByPk(songId);

  if (!songFinded) {
    throw new Error("Song not found");
  }

  if (songFinded.userId != userId) {
    throw new Error("User does not song owner");
  }

  return true;
};

module.exports = containsUserSongService;
