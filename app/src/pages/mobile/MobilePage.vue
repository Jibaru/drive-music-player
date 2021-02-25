<template>
  <div class="mobile-page-container">
    <div v-if="hasRootDriveKey">
      <router-view class="main"></router-view>
      <the-navbar class="navbar"></the-navbar>
    </div>
    <div v-else>
      <change-root-drive-key />
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
