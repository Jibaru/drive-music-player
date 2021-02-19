const { Playlist } = require("../../../db/models/index");

const deletePlaylistService = async ({ playlistId }) => {
  if (!playlistId) {
    throw new Error("PlaylistId cannot be null");
  }

  const playlistsDeleted = await Playlist.destroy({
    where: {
      id: playlistId,
    },
  });

  if (playlistsDeleted === 0) {
    throw new Error("Playlist not found");
  }

  return "Playlist deleted correctly";
};

module.exports = deletePlaylistService;
