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
        v-for="(playlist, index) in playlists"
        :key="playlist.id"
        :playlist-id="playlist.id"
        :playlist-name="playlist.name"
        :count-songs="playlist.songs.length"
        @delete="openDeletePlaylistDialog(playlist.id)"
        @add-song="openAddSongsToPlaylistDialog(playlist.id)"
        @click="playPlaylist(index)"
      />
    </ul>
    <base-spinner v-else-if="isLoading" centered full-height />
    <div v-else-if="playlistsEmpty" class="empty-message">
      Empty
    </div>
    <delete-playlist-dialog
      :open="isDeletePlaylistDialogOpen"
      @close="closeDeletePlaylistDialog"
      :playlistName="selectedPlaylist.name"
      :playlistId="selectedPlaylist.id"
    />
    <add-songs-to-playlist-dialog
      :open="isAddSongsToPlaylistDialogOpen"
      @close="closeAddSongsToPlaylistDialog"
      :playlistName="selectedPlaylist.name"
      :playlistId="selectedPlaylist.id"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import PlaylistItem from "./PlaylistItem.vue";
import NewPlaylistDialog from "./NewPlaylistDialog.vue";
import DeletePlaylistDialog from "./DeletePlaylistDialog.vue";
import AddSongsToPlaylistDialog from "./AddSongsToPlaylistDialog.vue";

export default {
  components: {
    PlaylistItem,
    NewPlaylistDialog,
    DeletePlaylistDialog,
    AddSongsToPlaylistDialog,
  },
  data() {
    return {
      isNewPlayistDialogOpen: false,
      isDeletePlaylistDialogOpen: false,
      isAddSongsToPlaylistDialogOpen: false,
      selectedPlaylist: {
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
    ...mapActions({
      findPlaylistSongsAndPlay: "currentPlayback/findPlaylistSongsAndPlay",
    }),
    findAndSetPlaylist(id) {
      const playlist = this.playlists.find((p) => p.id == id);
      this.selectedPlaylist.name = playlist.name;
      this.selectedPlaylist.id = playlist.id;
    },
    openNewPlaylistDialog() {
      this.isNewPlayistDialogOpen = true;
    },
    closeNewPlaylistDialog() {
      this.isNewPlayistDialogOpen = false;
    },
    openDeletePlaylistDialog(id) {
      this.findAndSetPlaylist(id);
      this.isDeletePlaylistDialogOpen = true;
    },
    closeDeletePlaylistDialog() {
      this.isDeletePlaylistDialogOpen = false;
    },
    openAddSongsToPlaylistDialog(id) {
      this.findAndSetPlaylist(id);
      this.isAddSongsToPlaylistDialogOpen = true;
    },
    closeAddSongsToPlaylistDialog() {
      this.isAddSongsToPlaylistDialogOpen = false;
    },
    playPlaylist(index) {
      this.findPlaylistSongsAndPlay({
        name: this.playlists[index].name,
        playlistId: this.playlists[index].id,
      });
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
  overflow-y: auto;
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
