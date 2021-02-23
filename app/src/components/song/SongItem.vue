<template>
  <li class="song-item">
    <div>
      <img :src="imageUrl" alt="song-image" />
    </div>
    <div class="info">
      <h2>{{ songName }}</h2>
      <p><font-awesome-icon icon="clock" /> {{ mappedDuration }}</p>
      <p><font-awesome-icon icon="history" /> {{ timesPlayed }}</p>
    </div>
    <div class="actions">
      <ul>
        <li>
          <base-icon-button :icon="favoriteIcon" />
        </li>
      </ul>
      <base-button mini>
        <font-awesome-icon icon="plus" /> Add to playlist
      </base-button>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    songId: {
      type: Number,
      required: true,
    },
    songName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    timesPlayed: {
      type: Number,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
    duration: {
      type: Number,
      required: false,
    },
  },
  computed: {
    favoriteIcon() {
      return this.isFavorite ? ["fas", "heart"] : ["far", "heart"];
    },
    mappedDuration() {
      let parsedDuration = "--:--";
      if (this.duration) {
        parsedDuration = this.mapDuration(this.duration);
      }
      return parsedDuration;
    },
  },
  methods: {
    mapDuration(secDuration) {
      let minutes = 0;
      let seconds = 0;
      if (secDuration > 60) {
        minutes = (secDuration / 60).toFixed(0);
        seconds = secDuration % 60;
      } else {
        seconds = secDuration;
      }
      return `${minutes}:${seconds <= 9 ? "0" + seconds : seconds}`;
    },
  },
};
</script>
<style scoped>
.song-item {
  list-style: none;
  margin: 0.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: 0.4rem;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  width: 97%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.song-item div:first-child {
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  min-height: 4rem;
  border-radius: 0.3rem;
  overflow: hidden;
}

.song-item div:first-child img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.info {
  text-align: start;
  margin: 0 1rem;
  width: 100%;
}

.info h2 {
  color: var(--app-primary-contrast-color);
  font-size: 1.1rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.info p {
  color: var(--app-primary-contrast-color);
  font-size: 0.8rem;
  opacity: 0.5;
  margin-top: 0.2rem;
}

.actions {
  min-width: 5rem;
  text-align: end;
}

.actions li {
  list-style: none;
  display: inline-block;
}
</style>