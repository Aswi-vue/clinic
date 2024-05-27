import { createApp } from "vue";
import router from "./router";
//PRIMEVUE
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import Menubar from "primevue/menubar";

import App from "./App.vue";

const app = createApp(App);

app.component("Sidebar", Sidebar);
app.component("Button", Button);
app.component("Menubar", Menubar);

app.use(router);
app.use(PrimeVue);
app.mount("#app");
