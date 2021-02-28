export default {
  setListName(state, { name }) {
    state.listName = name;
  },
  setSongsPlaylist(state, { songs }) {
    state.songsPlaylist = songs;
  },
  setCurrentSong(state, { song, onLoadedSong }) {
    state.currentSong.id = song.id;
    state.currentSong.name = song.name;
    state.currentSong.songUrl = song.songUrl;
    state.currentSong.imageUrl = song.imageUrl;
    state.currentSong.durationMilliseconds = song.durationMilliseconds;
    state.currentSong.timesPlayed = song.timesPlayed;
    state.currentSong.isFavorite = song.isFavorite;
    state.currentSong.playlists = song.playlists;

    if (state.playInstance) {
      state.currentTimestamp = 0;
      state.playInstance.currentTime = 0;
      state.playInstance.pause();
      state.loadedCurrentSong = false;
    }
    state.playInstance = new Audio(song.songUrl);

    state.playInstance.onloadeddata = () => {
      clearInterval(state.timeStampInterval);
      state.currentTotalTime = state.playInstance.duration;
      state.loadedCurrentSong = true;

      if (
        state.playInstance.duration !== state.currentSong.durationMilliseconds
      ) {
        state.currentSong.durationMilliseconds = state.playInstance.duration;
      }

      onLoadedSong({
        duration: {
          newVal: state.playInstance.duration,
          oldVal: song.durationMilliseconds,
        },
      });
    };
  },
  play(state, { onFinished }) {
    if (state.playInstance && state.playInstance.paused) {
      state.playInstance.play();
      state.isPlaying = true;

      state.timeStampInterval = setInterval(() => {
        state.currentTimestamp = state.playInstance.currentTime;
        if (state.currentTimestamp >= state.playInstance.duration) {
          clearInterval(state.timeStampInterval);
          state.currentTimestamp = 0;
          state.isPlaying = false;

          if (onFinished) {
            onFinished();
          }
        }
      }, 1000);
    }
  },
  pause(state) {
    if (state.playInstance && !state.playInstance.paused) {
      state.playInstance.pause();
      clearInterval(state.timeStampInterval);
      state.isPlaying = false;
    }
  },
  changeCurrentTimestamp(state, { timestamp }) {
    if (state.playInstance) {
      state.currentTimestamp = timestamp;
      state.playInstance.currentTime = timestamp;
    }
  },
  changeCurrentVolume(state, { percentage }) {
    state.currentVolume = percentage;
    if (state.playInstance) {
      state.playInstance.volume = percentage * 0.01;
    }
  },
  toggleSongFavorite(state, { songId, val }) {
    const index = state.songsPlaylist.findIndex((song) => song.id === songId);
    if (index !== -1) {
      state.songsPlaylist[index].isFavorite = val;
      if (state.currentSong.id === songId) {
        state.currentSong.isFavorite = val;
      }
    }
  },
};
