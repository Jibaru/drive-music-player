const checkTokenMiddleware = require("../middlewares/auth/check-token.middleware");

const app = require("express")();

const ROUTES = {
  createUserPlaylistSong: "/api/users/:userId/playlists/:playlistId",
  createUserPlaylist: "/api/users/:userId/playlist",
  deleteUserPlaylistSong:
    "/api/users/:userId/playlists/:playlistId/songs/:songId",
  deleteUserPlaylist: "/api/users/:userId/playlists/:playlistId",
  getUserPlaylists: "/api/users/:userId/playlists",
  getUserSongs: "/api/users/:userId/songs",
  increaseTimesPlayedByOneUserSong:
    "/api/users/:userId/songs/:songId/increase-times-played-by-one",
  refreshUserSongs: "/api/users/:userId/songs/refresh",
  setDurationMillisecondsUserSong:
    "/api/users/:userId/songs/:songId/set-duration-milliseconds",
  updateFavoriteUserSong: "/api/users/:userId/songs/:songId",
  updateUserRootDriveKey: "/api/users/:userId/root-drive-key",
};

app.post(
  ROUTES.createUserPlaylistSong,
  [checkTokenMiddleware],
  require("../controllers/user/create-user-playlist-song.controller")
);

app.post(
  ROUTES.createUserPlaylist,
  [checkTokenMiddleware],
  require("../controllers/user/create-user-playlist.controller")
);

app.delete(
  ROUTES.deleteUserPlaylist,
  [checkTokenMiddleware],
  require("../controllers/user/delete-user-playlist.controller")
);

app.delete(
  ROUTES.deleteUserPlaylistSong,
  [checkTokenMiddleware],
  require("../controllers/user/delete-user-playlist-song-controller")
);

app.get(
  ROUTES.getUserPlaylists,
  [checkTokenMiddleware],
  require("../controllers/user/get-user-playlists.controller")
);

app.put(
  ROUTES.updateUserRootDriveKey,
  [checkTokenMiddleware],
  require("../controllers/user/update-user-root-drive-key.controller")
);

app.get(
  ROUTES.getUserSongs,
  [checkTokenMiddleware],
  require("../controllers/user/get-user-songs.controller")
);

app.put(
  ROUTES.refreshUserSongs,
  [checkTokenMiddleware],
  require("../controllers/user/refresh-user-songs.controller")
);

app.put(
  ROUTES.increaseTimesPlayedByOneUserSong,
  [checkTokenMiddleware],
  require("../controllers/user/increase-times-played-by-one-user-song.controller")
);

app.post(
  ROUTES.setDurationMillisecondsUserSong,
  [checkTokenMiddleware],
  require("../controllers/user/set-duration-milliseconds-user-song.controller")
);

app.put(
  ROUTES.updateFavoriteUserSong,
  [checkTokenMiddleware],
  require("../controllers/user/update-favorite-user-song.controller")
);

module.exports = app;
