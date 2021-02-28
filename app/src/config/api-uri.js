const LOGIN = "/api/login";
const REGISTER = "/api/register";
const PRE_REGISTER = "/api/pre-register";
const CREATE_USER_PLAYLIST_SONG = "/api/users/:userId/playlists/:playlistId";
const CREATE_USER_PLAYLIST = "/api/users/:userId/playlist";
const DELETE_USER_PLAYLIST_SONG =
  "/api/users/:userId/playlists/:playlistId/songs/:songId";
const DELETE_USER_PLAYLIST = "/api/users/:userId/playlists/:playlistId";
const GET_USER_PLAYLISTS = "/api/users/:userId/playlists";
const GET_USER_SONGS = "/api/users/:userId/songs";
const INCREASE_TIMES_PLAYED_BY_ONE_USER_SONG =
  "/api/users/:userId/songs/:songId/increase-times-played-by-one";
const REFRESH_USER_SONGS = "/api/users/:userId/songs/refresh";
const SET_DURATION_MILLISECONDS_USER_SONG =
  "/api/users/:userId/songs/:songId/set-duration-milliseconds";
const UPDATE_FAVORITE_USER_SONG = "/api/users/:userId/songs/:songId";
const UPDATE_USER_ROOT_DRIVE_KEY = "/api/users/:userId/root-drive-key";
const GET_PLAYLIST_SONGS = "/api/playlists/:playlistId/songs";

export {
  LOGIN,
  REGISTER,
  PRE_REGISTER,
  CREATE_USER_PLAYLIST_SONG,
  CREATE_USER_PLAYLIST,
  DELETE_USER_PLAYLIST_SONG,
  DELETE_USER_PLAYLIST,
  GET_USER_PLAYLISTS,
  GET_USER_SONGS,
  INCREASE_TIMES_PLAYED_BY_ONE_USER_SONG,
  REFRESH_USER_SONGS,
  SET_DURATION_MILLISECONDS_USER_SONG,
  UPDATE_FAVORITE_USER_SONG,
  UPDATE_USER_ROOT_DRIVE_KEY,
  GET_PLAYLIST_SONGS,
};
