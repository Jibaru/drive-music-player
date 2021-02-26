export default {
  allPlaylists(state) {
    return state.playlists;
  },
  playlistsEmpty(state) {
    return state.playlists.length === 0;
  },
  fetchingPlaylists(state) {
    return state.fetchingPlaylists;
  },
};
