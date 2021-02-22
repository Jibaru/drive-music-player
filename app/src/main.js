import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faBars, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./routes.js";

const app = createApp(App);

library.add(faList, faBars, faMusic);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
