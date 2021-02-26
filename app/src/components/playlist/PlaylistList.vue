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
        @delete="openDeletePlaylistDialog(playlist.id)"
      />
    </ul>
    <base-spinner v-else-if="isLoading" centered full-height />
    <div v-else-if="playlistsEmpty" class="empty-message">
      Empty
    </div>
    <delete-playlist-dialog
      :open="isDeletePlaylistDialogOpen"
      @close="closeDeletePlaylistDialog"
      :playlistName="playlistToDelete.name"
      :playlistId="playlistToDelete.id"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import PlaylistItem from "./PlaylistItem.vue";
import NewPlaylistDialog from "./NewPlaylistDialog.vue";
import DeletePlaylistDialog from "./DeletePlaylistDialog.vue";

export default {
  components: {
    PlaylistItem,
    NewPlaylistDialog,
    DeletePlaylistDialog,
  },
  data() {
    return {
      isNewPlayistDialogOpen: false,
      isDeletePlaylistDialogOpen: false,
      playlistToDelete: {
        id: null,
        name: null,
      },
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
    openDeletePlaylistDialog(id) {
      const playlist = this.playlists.find((p) => p.id == id);
      this.playlistToDelete.name = playlist.name;
      this.playlistToDelete.id = playlist.id;
      this.isDeletePlaylistDialogOpen = true;
    },
    closeDeletePlaylistDialog() {
      this.isDeletePlaylistDialogOpen = false;
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
