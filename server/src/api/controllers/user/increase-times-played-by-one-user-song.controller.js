const increaseTimesPlayedSongService = require("../../services/songs/increase-times-played-song.service");
const containsUserSongService = require("../../services/songs/contains-user-song.service");

// PUT: /api/users/:userId/songs/:songId/increase-times-played-by-one
const increaseTimesPlayedByOneUserSongController = async (req, res) => {
  const { userId, songId } = req.params;

  try {
    await containsUserSongService({ songId, userId });

    const message = await increaseTimesPlayedSongService({
      songId,
      timesToAdd: 1,
    });

    return res.status(200).json({
      ok: true,
      message,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = increaseTimesPlayedByOneUserSongController;
