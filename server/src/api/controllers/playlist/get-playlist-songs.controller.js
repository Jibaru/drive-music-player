const getAllPlaylistSongsService = require("../../services/playlists/get-all-playlist-songs.service");

// GET: /api/playlists/:playlistId/songs
const getPlaylistSongsController = async (req, res) => {
  const { playlistId } = req.params;

  try {
    const playlistSongs = await getAllPlaylistSongsService({ playlistId });

    const songs = playlistSongs.map((playlistSong) => playlistSong.song);

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

module.exports = getPlaylistSongsController;
