<template>
  <div>
    <user-data class="user-data" />
    <the-songs-menu class="songs-menu" />
  </div>
</template>
<script>
import TheSongsMenu from "./TheSongsMenu.vue";
import UserData from "../user/UserData.vue";

export default {
  components: {
    TheSongsMenu,
    UserData,
  },
};
</script>
<style scoped>
div {
  background: var(--app-primary-color);
}

.user-data {
  height: 8rem;
}

.songs-menu {
  height: calc(100% - 8rem);
}
</style>
