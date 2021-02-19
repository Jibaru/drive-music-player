const getAllSongsService = require("../../services/songs/get-all-songs.service");

// GET: /api/users/:userId/songs
const getUserSongsController = async (req, res) => {
  const { userId } = req.params;

  try {
    const songs = await getAllSongsService({ userId });

    return res.status(200).json({
      ok: true,
      songs,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = getUserSongsController;
