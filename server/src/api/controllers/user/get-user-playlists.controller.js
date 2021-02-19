const getAllPlaylistsService = require("../../services/playlists/get-all-playlists.service");

// GET: /api/users/:userId/playslists
const getUserPlaylistsController = async (req, res) => {
  const { userId } = req.params;

  try {
    const playlists = await getAllPlaylistsService({ userId });

    return res.status(200).json({
      ok: true,
      playlists,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = getUserPlaylistsController;
