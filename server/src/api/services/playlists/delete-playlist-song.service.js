const { PlaylistSong } = require("../../../db/models/index");

const deletePlaylistSongService = async ({ songId, playlistId }) => {
  if (!songId || !playlistId) {
    throw new Error("PlaylistId or songId cannot be null");
  }

  const playlistSongsDeleted = await PlaylistSong.destroy({
    where: {
      songId,
      playlistId,
    },
  });

  if (playlistSongsDeleted === 0) {
    throw new Error("PlaylistSong not found");
  }

  return "PlaylistSong deleted correctly";
};

module.exports = deletePlaylistSongService;
