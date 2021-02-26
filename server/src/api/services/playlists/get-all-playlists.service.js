const { Playlist, Song } = require("../../../db/models/index");

const getAllPlaylistsService = async ({ userId }) => {
  const playlistsFinded = await Playlist.findAll({
    where: {
      ...(userId && {
        userId,
      }),
    },
    include: [
      {
        model: Song,
        as: "songs",
        attributes: ["id"],
        through: { attributes: [] },
      },
    ],
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
