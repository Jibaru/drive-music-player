export default {
  setSongs(state, { songs }) {
    state.songs = songs;
  },
  addPlaylistIdToSong(state, { playlistId, songId }) {
    const index = state.songs.findIndex((song) => song.id === songId);
    state.songs[index].playlists.push({
      id: playlistId,
    });
  },
  removePlaylistIdFromSong(state, { playlistId, songId }) {
    const songIndex = state.songs.findIndex((song) => song.id === songId);
    const playlistIndex = state.songs[songId].playlists.findIndex(
      (playlist) => playlist.id === playlistId
    );
    state.songs[songIndex].playlists.splice(playlistIndex, 1);
  },
  setIsFetching(state, { val }) {
    state.fetchingSongs = val;
  },
  toggleSongFavorite(state, { songId, val }) {
    const index = state.songs.findIndex((song) => song.id === songId);
    state.songs[index].isFavorite = val;
  },
  setSongDuration(state, { songId, duration }) {
    const index = state.songs.findIndex((song) => song.id === songId);
    state.songs[index].durationMilliseconds = duration;
  },
};
