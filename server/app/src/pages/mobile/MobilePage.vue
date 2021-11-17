<template>
  <div class="mobile-page-container">
    <div v-if="hasRootDriveKey && isAuthenticated">
      <router-view class="main"></router-view>
      <the-navbar class="navbar"></the-navbar>
    </div>
    <div v-else-if="!hasRootDriveKey && isAuthenticated">
      <change-root-drive-key full-page />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import TheNavbar from "../../components/nav/TheNavbar.vue";
import ChangeRootDriveKey from "../../components/user/ChangeRootDriveKey.vue";

export default {
  components: {
    TheNavbar,
    ChangeRootDriveKey,
  },
  computed: {
    ...mapGetters({
      hasRootDriveKey: "auth/hasRootDriveKey",
      isAuthenticated: "auth/isAuthenticated",
    }),
  },
};
</script>
<style scoped>
.mobile-page-container {
  height: 100vh;
}

.mobile-page-container > div {
  height: 100%;
}

.main {
  height: calc(100vh - 3.5rem);
}

.navbar {
  height: 3.5rem;
}
</style>
