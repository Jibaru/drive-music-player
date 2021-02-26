export default {
  setPlaylists(state, { playlists }) {
    state.playlists = playlists;
  },
  setIsFetching(state, { val }) {
    state.fetchingPlaylists = val;
  },
  setIsCreatingPlaylist(state, { val }) {
    state.creatingPlaylist = val;
  },
  setIsDeletingPlaylist(state, { val }) {
    state.deletingPlaylist = val;
  },
};
