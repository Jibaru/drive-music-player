<template>
  <div>
    <current-song-list class="current-song-list" />
  </div>
</template>
<script>
import CurrentSongList from "../components/song/CurrentSongList.vue";

export default {
  components: {
    CurrentSongList,
  },
};
</script>
<style scoped>
div {
  height: 100%;
  background-color: var(--app-primary-color);
}

.current-song-list {
  height: 100%;
}
</style>
