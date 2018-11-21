import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import World from "./views/World/World.vue";
import Image from "./views/Image/Image.vue";
import Military from "./views/Military/Military.vue";
import History from "./views/History/History.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/World",
      name: "World",
      component: World
    },
    {
      path: "/Image",
      name: "Image",
      component: Image
    },
    {
      path: "/Military",
      name: "Military",
      component: Military
    },
    {
      path: "/History",
      name: "History",
      component: History
    }
  ]
});
