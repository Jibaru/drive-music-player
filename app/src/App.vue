<template>
  <router-view></router-view>
</template>
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
