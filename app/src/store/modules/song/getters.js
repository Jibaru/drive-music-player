export default {
  allSongs(state) {
    return state.songs;
  },
  favoriteSongs(state) {
    return state.songs.filter((song) => song.isFavorite);
  },
  songsEmpty(state) {
    return state.songs.length === 0;
  },
  favoriteSongsEmpty(_, getters) {
    return getters.favoriteSongs.length === 0;
  },
  fetchingSongs(state) {
    return state.fetchingSongs;
  },
};
