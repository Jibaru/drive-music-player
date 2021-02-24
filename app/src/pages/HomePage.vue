<template>
  <main>
    <the-menu class="menu" />
    <current-song class="current-song" />
    <current-song-list class="current-song-list" />
  </main>
</template>
<script>
import TheMenu from "../components/menu/TheMenu.vue";
import CurrentSong from "../components/song/CurrentSong.vue";
import CurrentSongList from "../components/song/CurrentSongList.vue";

export default {
  components: {
    TheMenu,
    CurrentSong,
    CurrentSongList,
  },
};
</script>

<style scoped>
body {
  width: 100%;
}

main {
  width: 100%;
  height: 100vh;
  background-color: var(--app-primary-color);
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 18rem calc(100% - 18rem);
  grid-template-areas:
    "menu song"
    "menu playlist";
}

.menu {
  grid-area: menu;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
  z-index: 10;
}

.current-song {
  grid-area: song;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
  z-index: 8;
}

.current-song-list {
  grid-area: playlist;
}
</style>
