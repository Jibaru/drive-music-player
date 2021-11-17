export default {
  hasCurrentSong(state) {
    return state.currentSong.id !== null;
  },
  currentSong(state) {
    return state.currentSong;
  },
  currentSongId(state) {
    return state.currentSong.id;
  },
  currentSongIndex(state) {
    const index = state.songsPlaylist.findIndex(
      (s) => s.id === state.currentSong.id
    );
    return index;
  },
  currentTimestamp(state) {
    return state.currentTimestamp;
  },
  currentTotalTime(state) {
    return state.currentTotalTime;
  },
  currentVolume(state) {
    return state.currentVolume;
  },
  isPlaying(state) {
    return state.isPlaying;
  },
  currentPlaylist(state) {
    return state.songsPlaylist;
  },
  listName(state) {
    return state.listName;
  },
  autoNextEnabled(state) {
    return state.autoNext;
  },
  loadedCurrentSong(state) {
    return state.loadedCurrentSong;
  },
  loadingCurrentSong(state) {
    return state.loadingCurrentSong;
  },
  endedCurrentSong(state) {
    return state.endedCurrentSong;
  },
  canNext(state, getters) {
    return (
      getters.currentSongIndex !== -1 &&
      getters.currentSongIndex + 1 < state.songsPlaylist.length &&
      getters.loadedCurrentSong
    );
  },
  canPrev(_, getters) {
    return (
      getters.currentSongIndex !== -1 &&
      getters.currentSongIndex - 1 >= 0 &&
      getters.loadedCurrentSong
    );
  },
};
