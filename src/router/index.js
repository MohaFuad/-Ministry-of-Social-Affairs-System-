import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "../components/Dashboard/Dashboard";
import AddOrgan from "../components/SideBarItems/AddOrgan";
import Registered from "../components/SideBarItems/Registered";
import NotRegistered from "../components/SideBarItems/NotRegistered";
import Activity from "../components/SideBarItems/Activity";
import Location from "../components/SideBarItems/Location";
import Users from "../components/SideBarItems/Users";
import Organization from "../components/SideBarItems/Organization";
import Main from "../components/Main";
import Screen from "../components/View/Screen";

const routes = [

  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/AddOrgan",
    component: AddOrgan,
  },
  {
    path: "/Registered",
    component: Registered,
  },
  {
    path: "/NotRegistered",
    component: NotRegistered,
  },
  {
    path: "/Activity",
    component: Activity,
  },
  {
    path: "/Users",
    component: Users,
  },
  {
    path: "/Location",
    component: Location,
  },
  {
    path: "/Organization",
    component: Organization,
  },
  {
    path: "/main",
    component: Main,
  },
  {
    path: "/Screen",
    component: Screen,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
