<template>
  <ul class="playlists-list">
    <playlist-item
      v-for="playlist in playlistList"
      :key="playlist.id"
      :playlist-id="playlist.id"
      :playlist-name="playlist.name"
      :count-songs="playlist.countSongs"
    />
  </ul>
</template>
<script>
import PlaylistItem from "./PlaylistItem.vue";

export default {
  components: {
    PlaylistItem,
  },
  data() {
    return {
      playlistList: [
        {
          id: 1,
          name: "Playlist 1",
          countSongs: 10,
        },
        {
          id: 2,
          name: "Playlist 2",
          countSongs: 1,
        },
        {
          id: 3,
          name:
            "A playlist with very large name and some strange characters ç*]4ıÈ!Ä`",
          countSongs: 0,
        },
      ],
    };
  },
};
</script>
<style scoped>
.playlists-list {
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
}
</style>
