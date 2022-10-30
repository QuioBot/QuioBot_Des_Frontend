import { createWebHistory, createRouter } from "vue-router";

// import Home01 from "../pages/Home01";
import Page404 from "../pages/404";

import HomeDefi3 from "../pages/HomeDefi03";



const routes = [
  { path: '/', component: HomeDefi3},
  { path: '/404', component: Page404},


];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
