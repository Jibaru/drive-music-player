import { createApp } from "vue";

import App from "./App.vue";
import router from "./routes.js";

import BaseButton from "./components/ui/BaseButton.vue";

import { FontAwesomeIcon } from "./plugins/fortawesome.js";

const app = createApp(App);

app.use(router);

app.component("base-button", BaseButton);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
