export default {
  setSongsPlaylistAndPlay(context, { songs, name }) {
    if (!!songs && songs.length > 0 && !context.getters.loadingCurrentSong) {
      context.commit("setListName", { name });
      context.commit("setSongsPlaylist", { songs });
      context.dispatch("setSongAndPlay", { song: songs[0] });
    }
  },
  setSongAndPlay(context, { song }) {
    context.commit("setCurrentSong", {
      song,
      onLoadedSong: ({ duration }) => {
        context.commit("changeCurrentVolume", {
          percentage: context.getters.currentVolume,
        });
        context.dispatch("playSong");

        if (duration.newVal !== duration.oldVal) {
          context.dispatch(
            "song/updateSongDuration",
            {
              songId: song.id,
              duration: duration.newVal,
            },
            { root: true }
          );
          context.commit("setSongDuration", {
            songId: song.id,
            duration: duration.newVal,
          });
        }
      },
    });
  },
  findPlaylistSongsAndPlay(context, { playlistId, name }) {
    const playlistSongs = context.rootGetters["song/allSongs"].filter(
      (song) => !!song.playlists.find((playlist) => playlist.id === playlistId)
    );
    context.dispatch("setSongsPlaylistAndPlay", { name, songs: playlistSongs });
  },
  playSong(context) {
    if (context.getters.loadedCurrentSong) {
      context.commit("play", {
        onFinished: () => {
          if (context.getters.autoNextEnabled) {
            setTimeout(() => {
              context.dispatch("nextSong");
            }, 2000);
          }
        },
      });
    }
  },
  pauseSong(context) {
    if (context.getters.loadedCurrentSong) {
      context.commit("pause");
    }
  },
  nextSong(context) {
    if (context.getters.canNext) {
      context.dispatch("setSongAndPlay", {
        song:
          context.getters.currentPlaylist[context.getters.currentSongIndex + 1],
      });
    }
  },
  prevSong(context) {
    if (context.getters.canPrev) {
      context.dispatch("setSongAndPlay", {
        song:
          context.getters.currentPlaylist[context.getters.currentSongIndex - 1],
      });
    }
  },
  changeCurrentTimestamp(context, { timestamp }) {
    context.commit("changeCurrentTimestamp", { timestamp });
  },
  changeCurrentVolume(context, { percentage }) {
    context.commit("changeCurrentVolume", { percentage });
  },
  toggleSongInPlaybackFavorite(context, { songId, val }) {
    context.commit("toggleSongFavorite", { songId, val });
  },
  increasePlaybackSongTimesPlayedByOne(context, { songId }) {
    context.commit("increaseSongTimesPlayedByOne", { songId });
  },
};
