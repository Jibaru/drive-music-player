const { Playlist, Song } = require("../../../db/models/index");

const createPlaylistSongService = async ({ playlistId, songId }) => {
  const playlist = await Playlist.findByPk(playlistId);
  const song = await Song.findByPk(songId);
  const playlistSong = await playlist.addSong(song);

  if (!playlistSong) {
    throw new Error("Song its crrently added to this playslist");
  }

  return playlistSong;
};

module.exports = createPlaylistSongService;
