<template>
  <nav>
    <ul>
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="{ name: route.name }"
        :class="{ 'selected-tab': selectedRouteName === route.name }"
      >
        <li @click="selectRoute(route.name)">
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
          path: "/mobile/menu",
        },
        {
          name: "CurrentSong",
          text: "Song",
          iconClass: "music",
          path: "/mobile/current-song",
        },
        {
          name: "CurrentPlaylist",
          text: "Playlist",
          iconClass: "list",
          path: "/mobile/current-playlist",
        },
      ],
      selectedRouteName: null,
    };
  },
  watch: {
    $route(newVal) {
      const findedRoute = this.routes.find(
        (route) => route.path === newVal.path
      );
      if (findedRoute) {
        this.selectedRouteName = findedRoute.name;
      }
    },
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
  background-color: var(--app-primary-color);
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 10;
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
  text-align: center;
  background-color: var(--app-primary-color);
  color: var(--app-primary-contrast-color);
  height: 3.5rem;
  text-decoration: none;
  font-size: 0.9rem;
}

a:hover,
a:active,
.route-link-active,
.selected-tab {
  background-color: var(--app-secondary-color);
  color: var(--app-secondary-contrast-color);
}

li {
  padding: 0.5rem;
}
</style>
