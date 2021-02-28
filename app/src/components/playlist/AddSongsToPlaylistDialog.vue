<template>
  <base-dialog
    :title="title"
    :open="open && hasPlaylist"
    @close="$emit('close')"
    type="medium"
  >
    <h1>{{ playlistName }}</h1>
    <ul class="songs">
      <li v-for="(song, index) in allSongs" :key="song.id">
        <h3>{{ song.name }}</h3>
        <div class="actions">
          <base-button
            mini
            v-if="!songInPlaylist(index)"
            @click="addSongToPlaylist(song.id)"
            :disabled="isAddingOrDeleting"
          >
            <base-icon icon="plus" /> Add
          </base-button>
          <base-button
            mini
            color="danger"
            v-else
            @click="removeSongFromPlaylist(song.id)"
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
    playlistName: {
      type: String,
      required: false,
    },
    playlistId: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      title: "Add songs to Playlist",
    };
  },
  computed: {
    ...mapGetters({
      allSongs: "song/allSongs",
      addingSongToPlaylist: "playlist/addingSongToPlaylist",
      removingSongFromPlaylist: "playlist/removingSongFromPlaylist",
    }),
    hasPlaylist() {
      return !!this.playlistId && !!this.playlistName;
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
    songInPlaylist(index) {
      return !!this.allSongs[index].playlists.find(
        (p) => p.id == this.playlistId
      );
    },
    addSongToPlaylist(songId) {
      this.addSongToPlaylistAction({
        songId,
        playlistId: this.playlistId,
      });
    },
    removeSongFromPlaylist(songId) {
      this.removeSongFromPlaylistAction({
        songId,
        playlistId: this.playlistId,
      });
    },
  },
};
</script>
<style scoped>
.songs {
  height: 50vh;
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
