import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const base =
  process.env.NODE_ENV === "production"
    ? "/Layout-system-with-vue-and-vue-router/"
    : "/";

export default new Router({
  mode: "history",
  base,

  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "no-sidebar" },
      component: require("@/views/Home.vue").default // load sync home
    },
    {
      path: "/photos",
      name: "photos",
      component: () => import("@/views/Photos.vue")
    },
    {
      path: "/about-us",
      name: "about",
      meta: { layout: "no-sidebar" },
      component: () => import("@/views/About.vue")
    },
    {
      path: "/story/:id",
      name: "post",
      component: () => import("@/views/Post.vue")
    },
    {
      path: "*",
      name: "404*",
      component: require("@/views/404.vue").default // load sync home
    }
  ]
});