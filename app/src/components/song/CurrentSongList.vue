<template>
  <div class="current-song-list">
    <nav>
      <h1>Songlist name A song with very large name and some strange cha</h1>
    </nav>
    <ul>
      <song-item
        v-for="song in songList"
        :key="song.id"
        :song-id="song.id"
        :song-name="song.name"
        :image-url="song.imageUrl"
        :times-played="song.timesPlayed"
        :is-favorite="song.isFavorite"
        :duration="song.duration"
        show-delete-button
      />
    </ul>
  </div>
</template>
<script>
import SongItem from "./SongItem.vue";

export default {
  components: {
    SongItem,
  },
  data() {
    return {
      songList: [
        {
          id: 1,
          name: "Song 1",
          imageUrl: "https://dummyimage.com/600x400/e8561c/e8e9f0",
          timesPlayed: 0,
          isFavorite: false,
          duration: 1025,
        },
        {
          id: 2,
          name: "Song 2",
          imageUrl: "https://dummyimage.com/600x400/e8561c/e8e9f0",
          timesPlayed: 235,
          isFavorite: false,
          duration: null,
        },
        {
          id: 3,
          name:
            "A song with very large name and some strange characters ç*]4ıÈ!Ä`",
          imageUrl: "https://dummyimage.com/600x400/e8561c/e8e9f0",
          timesPlayed: 718,
          isFavorite: true,
          duration: 325,
        },
        {
          id: 4,
          name:
            "Another song with very large name and some strange characters ç*]4ıÈ!Ä`",
          imageUrl: "https://i.stack.imgur.com/ZN6oD.jpg",
          timesPlayed: 4,
          isFavorite: false,
          duration: null,
        },
        {
          id: 5,
          name:
            "Another song with very large name and some strange characters ç*]4ıÈ!Ä`",
          imageUrl: "https://i.stack.imgur.com/ZN6oD.jpg",
          timesPlayed: 4,
          isFavorite: false,
          duration: null,
        },
      ],
    };
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
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100% - 3.5rem);
}
</style>
