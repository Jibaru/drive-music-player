const deletePlaylistSongService = require("../../services/playlists/delete-playlist-song.service");
const containsUserPlaylistService = require("../../services/playlists/contains-user-playlist.service");
const containsUserSongService = require("../../services/songs/contains-user-song.service");

// DELETE: /api/users/:userId/playlists/:playlistId/songs/:songId
const deleteUserPlaylistSongController = async (req, res) => {
  const { userId, playlistId, songId } = req.params;

  try {
    await containsUserPlaylistService({ playlistId, userId });
    await containsUserSongService({ songId, userId });

    const message = await deletePlaylistSongService({ songId, playlistId });

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

module.exports = deleteUserPlaylistSongController;
