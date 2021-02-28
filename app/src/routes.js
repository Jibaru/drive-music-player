import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";

import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import HomePage from "./pages/HomePage.vue";
import MenuPage from "./pages/MenuPage.vue";
import CurrentSongPage from "./pages/CurrentSongPage.vue";
import CurrentPlaylistPage from "./pages/CurrentPlaylistPage.vue";
import MobilePage from "./pages/mobile/MobilePage.vue";

/**
 * App Routes
 */
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
    meta: {
      requiresAuth: false,
      requiresUnauth: true,
    },
  },
  {
    name: "Register",
    path: "/register",
    component: RegisterPage,
    meta: {
      requiresAuth: false,
      requiresUnauth: true,
    },
  },
  {
    name: "Home",
    path: "/home",
    component: HomePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "MobilePage",
    path: "/mobile",
    component: MobilePage,
    redirect: "/mobile/menu",
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        name: "Menu",
        path: "menu",
        component: MenuPage,
      },
      {
        name: "CurrentSong",
        path: "current-song",
        component: CurrentSongPage,
      },
      {
        name: "CurrentPlaylist",
        path: "current-playlist",
        component: CurrentPlaylistPage,
      },
    ],
  },
  {
    path: "/:notFound(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(function(to, _, next) {
  if (!to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next();
  } else if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next("/login");
  } else {
    next();
  }
});

export default router;
