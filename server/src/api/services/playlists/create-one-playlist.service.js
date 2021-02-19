const { Playlist } = require("../../../db/models/index");

const createOnePlaylistService = async ({ name, userId }) => {
  const playlist = await Playlist.create({
    name,
    userId,
  });

  return playlist;
};

module.exports = createOnePlaylistService;
