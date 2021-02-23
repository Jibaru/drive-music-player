<template>
  <div>
    <current-song class="current-song" />
  </div>
</template>
<script>
import CurrentSong from "../components/song/CurrentSong.vue";

export default {
  components: {
    CurrentSong,
  },
};
</script>
<style scoped>
div {
  height: 100%;
}

.current-song {
  height: 100%;
}
</style>
