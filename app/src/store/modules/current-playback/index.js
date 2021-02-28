import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      listName: "",
      songsPlaylist: [],
      currentSong: {
        id: null,
        name: null,
        songUrl: null,
        imageUrl: null,
        timesPlayed: 0,
        durationMilliseconds: null,
        isFavorite: false,
        playlists: [],
      },
      playInstance: null,
      loadedCurrentSong: false,
      currentTimestamp: 0,
      currentTotalTime: 0,
      timeStampInterval: null,
      currentVolume: 100,
      isPlaying: false,
      autoNext: true,
    };
  },
  mutations,
  actions,
  getters,
};
