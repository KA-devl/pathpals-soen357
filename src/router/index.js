import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RidePage from "../views/RidePage.vue";
import RideDetail from "../views/RideDetail.vue";
import RideChat from "../views/RideChat.vue";
import RateDriver from "../views/RateDriver.vue";
import LoginPage from "../views/LoginPage.vue";
import InitialPage from "../views/InitialPage.vue";

const routes = [
  {
    path: "/",
    name: "InitialPage",
    component: InitialPage,
    meta: {
      title: "Initial",
      auth: false,
    },
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
    meta: {
      title: "Home",
      auth: false,
    },
  },
  {
    path: "/ride",
    name: "RidePage",
    component: RidePage,
    meta: {
      title: "Ride List",
      auth: false,
    },
  },

  {
    path: "/ride-detail",
    name: "RideDetail",
    component: RideDetail,
    meta: {
      title: "Ride Detail",
      auth: false,
    },
  },

  {
    path: "/chat",
    name: "RideChat",
    component: RideChat,
    meta: {
      title: "Chat",
      auth: false,
    },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: {
      title: "Login",
      auth: false,
    },
  },
  {
    path: "/rate",
    name: "RateDriver",
    component: RateDriver,
    meta: {
      title: "Rate Driver",
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

//Naming the pages properly
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Pathpals`;
  next();
});

export default router;
