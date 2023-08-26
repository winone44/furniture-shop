import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView";
import ShopView from "@/views/ShopView";
import ContactView from "@/views/ContactView";
import ToSView from "@/views/ToSView";
import CartView from "@/views/CartView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/ToS',
    name: 'ToS',
    component: ToSView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
