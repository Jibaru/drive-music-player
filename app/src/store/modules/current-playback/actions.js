export default {
  setSongAndPlay(context, { song }) {
    context.commit("setCurrentSong", {
      song,
      onLoadedSong: () => {
        context.commit("changeCurrentVolume", {
          percentage: context.getters.currentVolume,
        });
        context.commit("play");
      },
    });
  },
  playSong(context) {
    context.commit("play");
  },
  pauseSong(context) {
    context.commit("pause");
  },
  changeCurrentTimestamp(context, { timestamp }) {
    context.commit("changeCurrentTimestamp", { timestamp });
  },
  changeCurrentVolume(context, { percentage }) {
    context.commit("changeCurrentVolume", { percentage });
  },
};
