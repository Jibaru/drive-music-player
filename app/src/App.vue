<template>
  <div>
    <keep-alive>
      <component :is="currentView"> </component>
    </keep-alive>
  </div>
</template>
<script>
import DesktopView from "./components/views/DesktopView.vue";
import MobileView from "./components/views/MobileView.vue";

export default {
  components: {
    DesktopView,
    MobileView,
  },

  data() {
    return {
      currentView: "desktop-view",
      windowWidth: window.innerWidth,
    };
  },

  watch: {
    windowWidth(newWidth, oldWidth) {
      if (newWidth <= 576 && !(oldWidth <= 576)) {
        this.$router.push("/menu");
        this.currentView = "mobile-view";
      } else if (newWidth > 576 && !(oldWidth > 576)) {
        this.$router.push("/home");
        this.currentView = "desktop-view";
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });

    if (this.windowWidth <= 576) {
      this.$router.push("/menu");
      this.currentView = "mobile-view";
    } else if (this.windowWidth > 576) {
      this.$router.push("/home");
      this.currentView = "desktop-view";
    }
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
<style>
/* Font Families */
@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/roboto/Roboto-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/roboto/Roboto-Bold.ttf") format("truetype");
  font-weight: bold;
}

/* App variables */
:root {
  /* Colors */
  --app-primary-color: #1b1c1e;
  --app-primary-contrast-color: white;
  --app-secondary-color: #ff4734;
  --app-secondary-contrast-color: white;
  --app-danger-color: #8d1111;
  --app-danger-contrast-color: white;
  --app-warning-color: #ffc400;
  --app-warning-contrast-color: #221b1b;
  --app-light-color: #ffffffcc;
  --app-light-contrast-color: #070606;

  /* Breakpoints */
  /* --app-sm: 576px;
  --app-md: 768px; */
}

/* Global Styles */
* {
  font-family: Roboto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
