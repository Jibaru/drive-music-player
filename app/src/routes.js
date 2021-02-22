import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import MenuPage from "./pages/MenuPage.vue";
import CurrentSongPage from "./pages/CurrentSongPage.vue";
import CurrentPlaylistPage from "./pages/CurrentPlaylistPage.vue";

/**
 * App Routes
 */
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "Home",
    path: "/home",
    component: HomePage,
  },
  {
    name: "Menu",
    path: "/menu",
    component: MenuPage,
  },
  {
    name: "CurrentSong",
    path: "/current-song",
    component: CurrentSongPage,
  },
  {
    name: "CurrentPlaylist",
    path: "/current-playlist",
    component: CurrentPlaylistPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
