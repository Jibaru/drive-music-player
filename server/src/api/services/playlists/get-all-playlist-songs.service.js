const { PlaylistSong, Song } = require("../../../db/models/index");

const getAllPlaylistSongsService = async ({ playlistId }) => {
  const playlistSongsFinded = await PlaylistSong.findAll({
    where: {
      ...(playlistId && {
        playlistId,
      }),
    },
    include: {
      model: Song,
      as: "song",
    },
  });

  if (!playlistSongsFinded) {
    throw new Error("PlaylistSongs not found");
  }

  if (playlistSongsFinded.length == 0) {
    throw new Error("PlaylistSongs not found");
  }

  return playlistSongsFinded;
};

module.exports = getAllPlaylistSongsService;
