<template>
  <section>
    <div class="info-container">
      <div class="image-container">
        <img :src="songImage" alt="song-image" />
      </div>
      <div class="info">
        <div>
          <h1>
            {{ currentSongName }}
          </h1>
          <p>
            <base-icon icon="history" /> Times Played:
            <span>{{ currentSong.timesPlayed }}</span>
          </p>
          <p>
            <base-icon icon="clock" /> Duration:
            <span> {{ mappedDuration }}</span>
          </p>
        </div>
        <ul>
          <li>
            <base-icon-button
              icon="download"
              @click="downloadSong"
              :disabled="!loadedCurrentSong"
            />
          </li>
          <li>
            <base-icon-button icon="heart" :disabled="!loadedCurrentSong" />
          </li>
        </ul>
      </div>
    </div>
    <play-control
      :elapsed-time="currentTimestamp"
      :total-time="currentTotalTime"
      :current-volume="currentVolume"
      :isPlaying="isPlaying"
      :prev-enabled="canPrev"
      :play-enabled="loadedCurrentSong"
      :next-enabled="canNext"
      @changed-bar="changeElapsedTime"
      @changed-volume="changeVolume"
      @play="playSong"
      @pause="pauseSong"
      @play-finished="increaseTimesPlayed"
      @prev="prevSong"
      @next="nextSong"
      class="play-control"
    />
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import PlayControl from "../play-control/PlayControl.vue";

export default {
  components: {
    PlayControl,
  },
  computed: {
    ...mapGetters({
      currentSong: "currentPlayback/currentSong",
      currentTimestamp: "currentPlayback/currentTimestamp",
      currentTotalTime: "currentPlayback/currentTotalTime",
      currentVolume: "currentPlayback/currentVolume",
      isPlaying: "currentPlayback/isPlaying",
      canPrev: "currentPlayback/canPrev",
      canNext: "currentPlayback/canNext",
      loadedCurrentSong: "currentPlayback/loadedCurrentSong",
    }),
    songImage() {
      return (
        this.currentSong.imageUrl ||
        require("@/assets/img/default-song-image.jpg")
      );
    },
    currentSongName() {
      return this.currentSong.name || "Song not loaded";
    },
    mappedDuration() {
      return new Date(this.currentTotalTime * 1000).toISOString().substr(14, 5);
    },
  },
  methods: {
    ...mapActions({
      changeCurrentTimestamp: "currentPlayback/changeCurrentTimestamp",
      changeCurrentVolume: "currentPlayback/changeCurrentVolume",
      playCurrentSong: "currentPlayback/playSong",
      pauseCurrentSong: "currentPlayback/pauseSong",
      toPrevSong: "currentPlayback/prevSong",
      toNextSong: "currentPlayback/nextSong",
    }),
    changeElapsedTime({ newElapsedTime }) {
      this.changeCurrentTimestamp({
        timestamp: newElapsedTime,
      });
    },
    changeVolume(percentage) {
      this.changeCurrentVolume({ percentage });
    },
    downloadSong() {
      window.open(this.currentSong.songUrl, "_blank");
    },
    playSong() {
      this.playCurrentSong();
    },
    pauseSong() {
      this.pauseCurrentSong();
    },
    prevSong() {
      this.toPrevSong();
    },
    nextSong() {
      this.toNextSong();
    },
    increaseTimesPlayed() {
      // TODO: Increase times played
    },
  },
};
</script>
<style scoped>
section {
  background: var(--app-primary-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.info-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

@media (min-width: 576px) {
  .info-container {
    flex-direction: row;
    margin-bottom: 1rem;
  }
}

.image-container {
  max-width: 250px;
  height: 250px;
  border-radius: 0.3rem;
  overflow: hidden;
  margin: 0 auto;
  grid-area: img;
}

@media (min-width: 576px) {
  .image-container {
    max-width: 150px;
    height: 150px;
  }
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  width: 100%;
  color: var(--app-primary-contrast-color);
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  grid-area: info;
}

@media (min-width: 576px) {
  .info {
    display: flex;
    align-items: flex-end;
    margin-left: 1rem;
  }
}

.info h1 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.info p {
  opacity: 0.5;
}

.info li {
  list-style: none;
  display: inline-block;
}

.play-control {
  grid-area: control;
}
</style>
