<template>
  <div class="container">
    <div class="actions">
      <new-playlist-dialog
        :open="isNewPlayistDialogOpen"
        @close="closeNewPlaylistDialog"
      />
      <base-button mini @click="openNewPlaylistDialog">
        Create New Playlist
      </base-button>
    </div>
    <ul class="playlists-list" v-if="!isLoading && !playlistsEmpty">
      <playlist-item
        v-for="playlist in playlists"
        :key="playlist.id"
        :playlist-id="playlist.id"
        :playlist-name="playlist.name"
        :count-songs="10"
      />
    </ul>
    <base-spinner v-else-if="isLoading" centered full-height />
    <div v-else-if="playlistsEmpty" class="empty-message">
      Empty
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import PlaylistItem from "./PlaylistItem.vue";
import NewPlaylistDialog from "./NewPlaylistDialog.vue";

export default {
  components: {
    PlaylistItem,
    NewPlaylistDialog,
  },
  data() {
    return {
      isNewPlayistDialogOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      playlists: "playlist/allPlaylists",
      playlistsEmpty: "playlist/playlistsEmpty",
      isLoading: "playlist/fetchingPlaylists",
    }),
  },
  methods: {
    openNewPlaylistDialog() {
      this.isNewPlayistDialogOpen = true;
    },
    closeNewPlaylistDialog() {
      this.isNewPlayistDialogOpen = false;
    },
  },
};
</script>
<style scoped>
.container {
  height: 100%;
}

.actions {
  height: 2.5rem;
  padding: 0.4rem;
}

.playlists-list {
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100% - 2.5rem);
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
