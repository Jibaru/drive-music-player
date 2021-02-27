export default {
  setPlaylists(state, { playlists }) {
    state.playlists = playlists;
  },
  addSongIdToPlaylist(state, { playlistId, songId }) {
    const index = state.playlists.findIndex(
      (playlist) => playlist.id === playlistId
    );
    state.playlists[index].songs.push({
      id: songId,
    });
  },
  removeSongIdFromPlaylist(state, { playlistId, songId }) {
    const playlistIndex = state.playlists.findIndex(
      (playlist) => playlist.id === playlistId
    );
    const songIndex = state.playlists[playlistIndex].songs.findIndex(
      (song) => song.id === songId
    );
    state.playlists[playlistIndex].songs.splice(songIndex, 1);
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
  setIsAddingSongToPlaylist(state, { val }) {
    state.addingSongToPlaylist = val;
  },
  setIsRemovingSongFromPlaylist(state, { val }) {
    state.removingSongFromPlaylist = val;
  },
};
