<template>
  <nav>
    <ul>
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="{ name: route.name }"
      >
        <li>
          <div>
            <font-awesome-icon :icon="route.iconClass" />
          </div>
          {{ route.text }}
        </li>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      routes: [
        {
          name: "Menu",
          text: "Menu",
          iconClass: "bars",
        },
        {
          name: "CurrentSong",
          text: "Song",
          iconClass: "music",
        },
        {
          name: "CurrentPlaylist",
          text: "Playlist",
          iconClass: "list",
        },
      ],
      selectedRouteName: null,
    };
  },
  methods: {
    selectRoute(name) {
      this.selectedRouteName = name;
    },
  },
};
</script>
<style scoped>
nav {
  width: 100%;
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.3);
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

a {
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  background-color: var(--app-primary-color);
  color: var(--app-primary-contrast-color);
  height: 3.5rem;
  text-decoration: none;
  font-size: 0.9rem;
}

a:hover,
a:active,
.active {
  background-color: var(--app-secondary-color);
  color: var(--app-secondary-contrast-color);
}

.route-link-active {
  background-color: var(--app-secondary-color);
  color: var(--app-secondary-contrast-color);
}

@media (min-width: 576px) {
  nav {
    display: none;
  }
}
</style>
