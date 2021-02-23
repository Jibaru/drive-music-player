<template>
  <div class="mobile-view-container">
    <router-view class="main"></router-view>
    <the-navbar class="navbar"></the-navbar>
  </div>
</template>
<script>
import TheNavbar from "../nav/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>
<style scoped>
.mobile-view-container {
  height: 100vh;
}

.main {
  height: calc(100vh - 3.5rem);
}

.navbar {
  height: 3.5rem;
}
</style>
