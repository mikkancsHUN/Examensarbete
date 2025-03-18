import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: ProductsView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
