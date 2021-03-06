import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "Home" */
        "@/views/Home.vue"
      ),
    meta: {
      title: "Opty's Home",
    },
  },
  {
    path: "/BSc",
    name: "BSc",
    component: () =>
      import(
        /* webpackChunkName: "BSc" */
        "@/views/BSc.vue"
      ),
    meta: {
      title: "Opty's BSc",
    },
  },
  {
    path: "/MSc",
    name: "MSc",
    component: () =>
      import(
        /* webpackChunkName: "MSc" */
        "@/views/MSc.vue"
      ),
    meta: {
      title: "Opty's MSc",
    },
  },
  {
    path: "*",
    redirect: "/Home",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
