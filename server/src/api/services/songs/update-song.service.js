const { Song } = require("../../../db/models/index");

const updateSongService = async (
  songId,
  { name, timesPlayed, isFavorite, durationMilliseconds }
) => {
  const updateFields = { name, timesPlayed, isFavorite, durationMilliseconds };
  const songFinded = await Song.findByPk(songId);

  if (!songFinded) {
    throw new Error("Song not found");
  }

  Object.keys(updateFields).forEach((key) => {
    if (updateFields[key] !== null && updateFields[key] !== undefined) {
      songFinded[key] = updateFields[key];
    }
  });

  await songFinded.save();
  return "Song updated correctly";
};

module.exports = updateSongService;
