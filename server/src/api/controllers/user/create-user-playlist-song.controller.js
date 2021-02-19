const createPlaylistSongService = require("../../services/playlists/create-playlist-song.service");
const containsUserPlaylistService = require("../../services/playlists/contains-user-playlist.service");
const containsUserSongService = require("../../services/songs/contains-user-song.service");

// POST: /api/users/:userId/playlists/:playlistId
// body: songId
const createUserPlaylistController = async (req, res) => {
  const { userId, playlistId } = req.params;
  const { songId } = req.body;

  try {
    await containsUserPlaylistService({ playlistId, userId });
    await containsUserSongService({ songId, userId });

    const playlistSong = await createPlaylistSongService({
      playlistId: playlistId,
      songId: songId,
    });

    return res.status(200).json({
      ok: true,
      playlistSong,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = createUserPlaylistController;
