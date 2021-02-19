const checkTokenMiddleware = require("../middlewares/auth/check-token.middleware");

const app = require("express")();

const ROUTES = {
  getPlaylistSongs: "/api/playlists/:playlistId/songs",
};

app.get(
  ROUTES.getPlaylistSongs,
  [checkTokenMiddleware],
  require("../controllers/playlist/get-playlist-songs.controller")
);

module.exports = app;
