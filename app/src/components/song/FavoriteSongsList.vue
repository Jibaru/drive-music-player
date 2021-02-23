<template>
  <ul class="song-list">
    <song-item
      v-for="song in songList"
      :key="song.id"
      :song-id="song.id"
      :song-name="song.name"
      :image-url="song.imageUrl"
      :times-played="song.timesPlayed"
      :is-favorite="song.isFavorite"
      :duration="song.duration"
    />
  </ul>
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
          isFavorite: true,
          duration: 1025,
        },
        {
          id: 2,
          name: "Song 2",
          imageUrl: "https://dummyimage.com/600x400/e8561c/e8e9f0",
          timesPlayed: 235,
          isFavorite: true,
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
          isFavorite: true,
          duration: null,
        },
      ],
    };
  },
};
</script>
<style scoped>
.song-list {
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
}
</style>
