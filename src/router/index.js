import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Menu from '../views/Menu';
import Locations from '../views/Locations';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
