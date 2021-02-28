const updateSongService = require("../../services/songs/update-song.service");
const containsUserSongService = require("../../services/songs/contains-user-song.service");

// POST: /api/users/:userId/songs/:songId/set-duration-seconds
// body: durationSeconds
const setDurationMillisecondsUserSongController = async (req, res) => {
  const { userId, songId } = req.params;
  const { durationMilliseconds } = req.body;

  try {
    await containsUserSongService({ songId, userId });

    const message = await updateSongService(songId, { durationMilliseconds });

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

module.exports = setDurationMillisecondsUserSongController;
