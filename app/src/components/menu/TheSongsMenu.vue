<template>
  <div class="songs-menu">
    <nav>
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ 'tab-selected': tabSelected === tab.component }"
          @click="selectTab(tab.component)"
        >
          {{ tab.name }}
        </li>
      </ul>
    </nav>
    <section>
      <component :is="tabSelected" />
    </section>
  </div>
</template>
<script>
import SongList from "../song/SongList.vue";
import PlaylistsSongList from "../song/PlaylistsSongList.vue";
import FavoriteSongsList from "../song/FavoriteSongsList.vue";

export default {
  components: {
    SongList,
    PlaylistsSongList,
    FavoriteSongsList,
  },
  data() {
    return {
      tabs: [
        {
          name: "All Songs",
          component: "song-list",
        },
        {
          name: "Playlists",
          component: "playlists-song-list",
        },
        {
          name: "Favorites",
          component: "favorite-songs-list",
        },
      ],
      tabSelected: null,
    };
  },
  methods: {
    selectTab(component) {
      this.tabSelected = component;
    },
  },
  created() {
    this.tabSelected = this.tabs[0].component;
  },
};
</script>
<style scoped>
nav {
  height: 4rem;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  height: 100%;
}

ul li {
  list-style: none;
  width: 100%;
  color: var(--app-primary-contrast-color);
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  cursor: pointer;
  height: 100%;
}

.tab-selected {
  background-color: var(--app-secondary-color);
}

section {
  height: calc(100% - 4rem);
}
</style>
