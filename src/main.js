import { createApp } from "vue";
import router from "./router";
//PRIMEVUE
import PrimeVue from "primevue/config";
import "primevue/resources/themes/mdc-light-deeppurple/theme.css";
import "primeicons/primeicons.css";

import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import Menubar from "primevue/menubar";

import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';


import App from "./App.vue";

const app = createApp(App);

app.component("Sidebar", Sidebar);
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);


app.use(router);
app.use(PrimeVue);
app.mount("#app");
