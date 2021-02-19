const { Song } = require("../../../db/models/index");

const getAllSongsService = async ({ userId }) => {
  const songsFinded = await Song.findAll({
    where: {
      ...(userId && {
        userId,
      }),
    },
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
