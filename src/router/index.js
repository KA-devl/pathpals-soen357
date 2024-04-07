import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RidePage from "../views/RidePage.vue";
import RideDetail from "../views/RideDetail.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      title: "Home",
      auth: false
    }
  },
  {
    path: "/ride",
    name: "RidePage",
    component: RidePage,
    meta: {
      title: "Ride List",
      auth: false
    }
  },


  {
    path: "/ride-detail",
    name: "RideDetail",
    component: RideDetail,
    meta: {
      title: "Ride Detail",
      auth: false
    }
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

//Naming the pages properly
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Pathpals`;
  next()
})



export default router;