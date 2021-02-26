export default {
  setPlaylists(state, { playlists }) {
    state.playlists = playlists;
  },
  setIsFetching(state, { val }) {
    state.fetchingPlaylists = val;
  },
};
