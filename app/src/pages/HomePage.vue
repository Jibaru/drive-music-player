<template>
  <div class="home">
    <main v-if="hasRootDriveKey">
      <the-menu class="menu" />
      <current-song class="current-song" />
      <current-song-list class="current-song-list" />
    </main>
    <div v-else>
      <change-root-drive-key full-page />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import TheMenu from "../components/menu/TheMenu.vue";
import CurrentSong from "../components/song/CurrentSong.vue";
import CurrentSongList from "../components/song/CurrentSongList.vue";
import ChangeRootDriveKey from "../components/user/ChangeRootDriveKey.vue";

export default {
  components: {
    TheMenu,
    CurrentSong,
    CurrentSongList,
    ChangeRootDriveKey,
  },
  computed: {
    ...mapGetters({
      hasRootDriveKey: "auth/hasRootDriveKey",
    }),
  },
};
</script>

<style scoped>
body,
.home {
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
