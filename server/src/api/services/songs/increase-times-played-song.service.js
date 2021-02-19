const { Song } = require("../../../db/models/index");

const increaseTimesPlayedSongService = async ({ songId, timesToAdd }) => {
  const songFinded = await Song.findByPk(songId);

  if (!songFinded) {
    throw new Error("Song not found");
  }

  songFinded.timesPlayed = songFinded.timesPlayed + timesToAdd;
  await songFinded.save();

  return "Played Times increased correctly";
};

module.exports = increaseTimesPlayedSongService;
