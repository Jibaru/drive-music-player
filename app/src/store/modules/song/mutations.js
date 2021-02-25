export default {
  setSongs(state, { songs }) {
    state.songs = songs;
  },
  setIsFetching(state, { val }) {
    state.fetchingSongs = val;
  },
  toggleSongFavorite(state, { songId, val }) {
    const index = state.songs.findIndex((song) => song.id === songId);
    if (index !== -1) {
      const song = { ...state.songs[index] };
      song.isFavorite = val;
      // Vue.set(state.songs, index, song);
      // state.songs[index].isFavorite = val;
      // const songs = [...state.songs];
      // const song = { ...songs[index] };

      // state.songs = [
      //   ...state.songs.splice(0, index),
      //   song,
      //   ...songs.splice(index, songs.length - 1),
      // ];
    }
  },
};
