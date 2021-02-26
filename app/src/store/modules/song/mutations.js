export default {
  setSongs(state, { songs }) {
    state.songs = songs;
  },
  setIsFetching(state, { val }) {
    state.fetchingSongs = val;
  },
  toggleSongFavorite(state, { songId, val }) {
    const index = state.songs.findIndex((song) => song.id === songId);
    state.songs[index].isFavorite = val;
  },
};
