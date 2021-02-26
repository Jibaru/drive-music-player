<template>
  <ul class="song-list" v-if="!isLoading && !favoriteSongsEmpty">
    <song-item
      v-for="song in favoriteSongs"
      :key="song.id"
      :song-id="song.id"
      :song-name="song.name"
      :image-url="song.imageUrl"
      :times-played="song.timesPlayed"
      :is-favorite="song.isFavorite"
      :duration="song.duration"
      @click-favorite-icon="toggleFavorite($event, song.id)"
    />
  </ul>
  <base-spinner v-else-if="isLoading" centered full-height />
  <div v-else-if="favoriteSongsEmpty" class="empty-message">
    Empty
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SongItem from "./SongItem.vue";

export default {
  components: {
    SongItem,
  },
  computed: {
    ...mapGetters({
      favoriteSongs: "song/favoriteSongs",
      favoriteSongsEmpty: "song/favoriteSongsEmpty",
      isLoading: "song/fetchingSongs",
    }),
  },
  methods: {
    ...mapActions({
      toggleSongFavorite: "song/toggleSongFavorite",
    }),
    toggleFavorite(val, songId) {
      this.toggleSongFavorite({ songId, val });
    },
  },
};
</script>
<style scoped>
.song-list {
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
}

.empty-message {
  color: var(--app-primary-contrast-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
