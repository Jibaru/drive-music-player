const deletePlaylistService = require("../../services/playlists/delete-playlist.service");
const containsUserPlaylistService = require("../../services/playlists/contains-user-playlist.service");

// DELETE: /api/users/:userId/playlists/:playlistId
const deleteUserPlaylistController = async (req, res) => {
  const { userId, playlistId } = req.params;

  try {
    await containsUserPlaylistService({ playlistId, userId });

    const message = await deletePlaylistService({ playlistId });

    return res.status(200).json({
      ok: true,
      message,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = deleteUserPlaylistController;
