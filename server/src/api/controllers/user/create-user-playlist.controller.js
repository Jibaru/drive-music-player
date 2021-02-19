const createOnePlaylistService = require("../../services/playlists/create-one-playlist.service");

// POST: /api/users/:userId/playlist
// body: name
const createUserPlaylistController = async (req, res) => {
  const { userId } = req.params;
  const { name } = req.body;

  try {
    const playlist = await createOnePlaylistService({ name, userId });

    return res.status(200).json({
      ok: true,
      playlist,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = createUserPlaylistController;
