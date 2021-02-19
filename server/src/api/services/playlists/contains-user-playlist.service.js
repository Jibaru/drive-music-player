const { Playlist } = require("../../../db/models/index");

const containsUserPlaylistService = async ({ playlistId, userId }) => {
  const playlistFinded = await Playlist.findByPk(playlistId);

  if (!playlistFinded) {
    throw new Error("Playlist not found");
  }

  if (playlistFinded.userId != userId) {
    throw new Error("User does not playlist owner");
  }

  return true;
};

module.exports = containsUserPlaylistService;
