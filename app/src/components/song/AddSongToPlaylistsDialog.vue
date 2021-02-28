<template>
  <base-dialog
    :title="title"
    :open="open && hasSong"
    @close="$emit('close')"
    type="medium"
  >
    <h1>{{ songName }}</h1>
    <ul class="playlists">
      <li v-for="(playlist, index) in allPlaylists" :key="playlist.id">
        <h3>{{ playlist.name }}</h3>
        <div class="actions">
          <base-button
            mini
            v-if="!playlistInSong(index)"
            @click="addSongToPlaylist(playlist.id)"
            :disabled="isAddingOrDeleting"
          >
            <base-icon icon="plus" /> Add
          </base-button>
          <base-button
            mini
            color="danger"
            v-else
            @click="removeSongFromPlaylist(playlist.id)"
            :disabled="isAddingOrDeleting"
          >
            <base-icon icon="trash-alt" /> Remove
          </base-button>
        </div>
      </li>
    </ul>
  </base-dialog>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  emits: ["close"],
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
    songName: {
      type: String,
      required: false,
    },
    songId: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      title: "Add song to Playlists",
    };
  },
  computed: {
    ...mapGetters({
      allPlaylists: "playlist/allPlaylists",
      addingSongToPlaylist: "playlist/addingSongToPlaylist",
      removingSongFromPlaylist: "playlist/removingSongFromPlaylist",
    }),
    hasSong() {
      return !!this.songId && !!this.songName;
    },
    isAddingOrDeleting() {
      return this.addingSongToPlaylist || this.removingSongFromPlaylist;
    },
  },
  methods: {
    ...mapActions({
      addSongToPlaylistAction: "playlist/addSongToPlaylist",
      removeSongFromPlaylistAction: "playlist/removeSongFromPlaylist",
    }),
    playlistInSong(index) {
      return !!this.allPlaylists[index].songs.find((s) => s.id == this.songId);
    },
    addSongToPlaylist(playlistId) {
      this.addSongToPlaylistAction({
        playlistId,
        songId: this.songId,
      });
    },
    removeSongFromPlaylist(playlistId) {
      this.removeSongFromPlaylistAction({
        playlistId,
        songId: this.songId,
      });
    },
  },
};
</script>
<style scoped>
.playlists {
  max-height: 50vh;
  overflow-y: auto;
}

li {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  width: calc(100% - 0.5rem);
}

li h3 {
  font-size: 1rem;
  font-weight: normal;
  width: calc(100% - 6rem);
}

li .actions {
  text-align: center;
  width: 6rem;
}
</style>
