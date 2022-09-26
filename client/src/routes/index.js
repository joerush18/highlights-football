import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import WatchPage from "../views/WatchPage";
import Competitions from "../views/Competitions";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/watch/:matchId/:link",
    name: "watch",
    component: WatchPage,
    props: true,
  },
  {
    path: "/competition/:compId",
    name: "compt",
    component: Competitions,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
