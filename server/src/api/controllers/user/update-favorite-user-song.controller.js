const updateSongService = require("../../services/songs/update-song.service");
const containsUserSongService = require("../../services/songs/contains-user-song.service");

// PUT: /api/users/:userId/songs/:songId
// body: isFavorite
const updateFavoriteUserSongController = async (req, res) => {
  const { userId, songId } = req.params;
  const { isFavorite } = req.body;

  try {
    await containsUserSongService({ songId, userId });
    await updateSongService(songId, { isFavorite });

    return res.status(200).json({
      ok: true,
      message:
        isFavorite === "true"
          ? "Song added to favorites"
          : "Song removed from favorites",
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = updateFavoriteUserSongController;
