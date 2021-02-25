export default {
  allSongs(state) {
    return state.songs;
  },
  songsEmpty(state) {
    return state.songs.length === 0;
  },
  fetchingSongs(state) {
    return state.fetchingSongs;
  },
};
