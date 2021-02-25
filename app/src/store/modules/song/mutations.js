export default {
  setSongs(state, { songs }) {
    state.songs = songs;
  },
  setIsFetching(state, { val }) {
    state.fetchingSongs = val;
  },
};
