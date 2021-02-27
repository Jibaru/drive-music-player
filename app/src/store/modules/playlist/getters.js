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
  creatingPlaylist(state) {
    return state.creatingPlaylist;
  },
  deletingPlaylist(state) {
    return state.deletingPlaylist;
  },
  addingSongToPlaylist(state) {
    return state.addingSongToPlaylist;
  },
  removingSongFromPlaylist(state) {
    return state.removingSongFromPlaylist;
  },
};
