<template>
  <div class="container">
    <div class="actions">
      <base-button mini @click="playSongList">
        Play all songs
      </base-button>
    </div>
    <ul class="song-list" v-if="!isLoading && !songsEmpty">
      <song-item
        v-for="(song, index) in songs"
        :key="song.id"
        :song-id="song.id"
        :song-name="song.name"
        :image-url="song.imageUrl"
        :times-played="song.timesPlayed"
        :is-favorite="song.isFavorite"
        :duration="song.durationMilliseconds"
        :selected="song.id === currentSongId"
        @click-favorite-icon="toggleFavorite($event, song.id)"
        @add-to-playlists="openAddSongToPlaylistsDialog(song.id)"
        @click="playSong(index)"
      />
    </ul>
    <base-spinner v-else-if="isLoading" centered full-height />
    <div v-else-if="songsEmpty" class="empty-message">
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
      songs: "song/allSongs",
      songsEmpty: "song/songsEmpty",
      isLoading: "song/fetchingSongs",
      currentSongId: "currentPlayback/currentSongId",
    }),
  },
  methods: {
    ...mapActions({
      toggleSongFavorite: "song/toggleSongFavorite",
      setSongsPlaylistAndPlay: "currentPlayback/setSongsPlaylistAndPlay",
    }),
    findAndSetSong(id) {
      const song = this.songs.find((s) => s.id == id);
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
      this.setSongsPlaylistAndPlay({
        songs: [this.songs[index]],
        name: "All songs",
      });
    },
    playSongList() {
      this.setSongsPlaylistAndPlay({
        songs: this.songs,
        name: "All songs",
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

.song-list {
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
