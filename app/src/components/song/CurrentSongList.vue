<template>
  <div class="current-song-list">
    <nav>
      <h1>{{ title }}</h1>
    </nav>
    <ul v-if="currentPlaylist.length > 0">
      <song-item
        v-for="(song, index) in currentPlaylist"
        :key="song.id"
        :song-id="song.id"
        :song-name="song.name"
        :image-url="song.imageUrl"
        :times-played="song.timesPlayed"
        :is-favorite="song.isFavorite"
        :duration="song.duration"
        @click-favorite-icon="toggleFavorite($event, song.id)"
        @add-to-playlists="openAddSongToPlaylistsDialog(song.id)"
        @click="playSong(index)"
      />
    </ul>
    <div v-else class="empty-message">
      Empty
    </div>
    <add-song-to-playlists-dialog
      :open="isAddSongToPlaylistsDialogOpen"
      @close="closeAddSongToPlaylistsDialog"
      :songName="selectedSong.name"
      :songId="selectedSong.id"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import SongItem from "./SongItem.vue";
import AddSongToPlaylistsDialog from "./AddSongToPlaylistsDialog.vue";

export default {
  components: {
    SongItem,
    AddSongToPlaylistsDialog,
  },
  data() {
    return {
      isAddSongToPlaylistsDialogOpen: false,
      selectedSong: {
        id: null,
        name: null,
      },
    };
  },
  computed: {
    ...mapGetters({
      currentPlaylist: "currentPlayback/currentPlaylist",
      listName: "currentPlayback/listName",
    }),
    title() {
      return this.listName || "Current playlist";
    },
  },
  methods: {
    ...mapActions({
      toggleSongFavorite: "song/toggleSongFavorite",
      setSongAndPlay: "currentPlayback/setSongAndPlay",
    }),
    findAndSetSong(id) {
      const song = this.currentPlaylist.find((s) => s.id == id);
      this.selectedSong.name = song.name;
      this.selectedSong.id = song.id;
    },
    toggleFavorite(val, songId) {
      this.toggleSongFavorite({ songId, val });
    },
    openAddSongToPlaylistsDialog(songId) {
      this.findAndSetSong(songId);
      this.isAddSongToPlaylistsDialogOpen = true;
    },
    closeAddSongToPlaylistsDialog() {
      this.isAddSongToPlaylistsDialogOpen = false;
    },
    playSong(index) {
      this.setSongAndPlay({ song: this.currentPlaylist[index] });
    },
  },
};
</script>
<style scoped>
.current-song-list {
  height: 100%;
  background-color: var(--app-primary-color);
}

.current-song-list nav {
  height: 3.5rem;
  padding: 1rem;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
}

.current-song-list nav h1 {
  font-size: 1.4rem;
  color: var(--app-primary-contrast-color);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.current-song-list ul {
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100% - 3.5rem);
}

.empty-message {
  color: var(--app-primary-contrast-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 3.5rem);
}
</style>
