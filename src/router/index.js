import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";


const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      title: "Home",
      auth: false
    }
  }


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