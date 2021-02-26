const { Song, Playlist } = require("../../../db/models/index");

const getAllSongsService = async ({ userId }) => {
  const songsFinded = await Song.findAll({
    where: {
      ...(userId && {
        userId,
      }),
    },
    include: [
      {
        model: Playlist,
        as: "playlists",
        attributes: ["id"],
        through: { attributes: [] },
      },
    ],
  });

  if (!songsFinded) {
    throw new Error("Songs not found");
  }

  if (songsFinded.length == 0) {
    throw new Error("Songs not found");
  }

  return songsFinded;
};

module.exports = getAllSongsService;
