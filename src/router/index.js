import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "../views/Signup.vue";
import quiz from "../views/quiz.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: quiz,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
