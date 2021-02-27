<template>
  <section>
    <div class="image-container">
      <img :src="songImage" alt="song-image" />
    </div>
    <div class="info">
      <div>
        <h1>
          {{ currentSong.name }}
        </h1>
        <p>
          <font-awesome-icon icon="history" /> Times Played:
          <span>{{ currentSong.timesPlayed }}</span>
        </p>
        <p>
          <font-awesome-icon icon="clock" /> Duration:
          <span> {{ currentSong.duration }}</span>
        </p>
      </div>
      <ul>
        <li>
          <base-icon-button icon="download" @click="downloadSong" />
        </li>
        <li>
          <base-icon-button icon="list" />
        </li>
      </ul>
    </div>
    <play-control
      :elapsed-time="currentTimestamp"
      :total-time="currentTotalTime"
      :current-volume="currentVolume"
      :isPlaying="isPlaying"
      @changed-bar="changeElapsedTime"
      @changed-volume="changeVolume"
      @play="playSong"
      @pause="pauseSong"
      @play-finished="increaseTimesPlayed"
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
    }),
    songImage() {
      return (
        this.currentSong.imageUrl ||
        require("@/assets/img/default-song-image.jpg")
      );
    },
  },
  methods: {
    ...mapActions({
      changeCurrentTimestamp: "currentPlayback/changeCurrentTimestamp",
      changeCurrentVolume: "currentPlayback/changeCurrentVolume",
      playCurrentSong: "currentPlayback/playSong",
      pauseCurrentSong: "currentPlayback/pauseSong",
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

.image-container {
  max-width: 250px;
  height: 250px;
  border-radius: 0.3rem;
  overflow: hidden;
  margin: 0 auto;
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
</style>
