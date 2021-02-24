import { createApp } from "vue";

import App from "./App.vue";
import router from "./routes.js";
import store from "./store/index.js";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseIconButton from "./components/ui/BaseIconButton.vue";
import BaseSnackbar from "./components/ui/BaseSnackbar.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";

import { FontAwesomeIcon } from "./plugins/fortawesome.js";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-button", BaseButton);
app.component("base-icon-button", BaseIconButton);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-snackbar", BaseSnackbar);
app.component("base-spinner", BaseSpinner);

app.mount("#app");
