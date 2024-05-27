import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ServicesPage from "@/views/ServicesPage.vue";
import PricingPage from "@/views/PricingPage.vue";


const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/services", component: ServicesPage },
  { path: "/pricing", component: PricingPage },


];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;