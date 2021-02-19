const { Playlist } = require("../../../db/models/index");

const getAllPlaylistsService = async ({ userId }) => {
  const playlistsFinded = await Playlist.findAll({
    where: {
      ...(userId && {
        userId,
      }),
    },
  });

  if (!playlistsFinded) {
    throw new Error("Playlists not found");
  }

  if (playlistsFinded.length == 0) {
    throw new Error("Playlists not found");
  }

  return playlistsFinded;
};

module.exports = getAllPlaylistsService;
