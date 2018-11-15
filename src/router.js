import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/Index",
      name: "Index",
      component: Index
    }
  ]
});
