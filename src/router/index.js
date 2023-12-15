import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import store from '@/store'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: { requireAuth: false },
        component: HomeView,
    },
    {
        path: '/products',
        name: 'products',
        meta: { requireAuth: false },
        component: () => import(/* webpackChunkName: "products" */ '../views/ProductView.vue'),
    },

    {
        path: '/cart',
        name: 'cart',
        meta: { requireAuth: true },
        component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        meta: { requireAuth: false },
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue'),
    },
    {
        path: '/products/config/:id?',
        name: 'products-editor',
        component: () => import(/* webpackChunkName: "products-editor" */ '../components/ProductsEditor.vue'),
        meta: {
            requireAuth: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach(async (to) => {
    if (to.meta?.requireAuth) {
        let isAuthenticated = store.state.auth.user

        if (!isAuthenticated) isAuthenticated = await store.dispatch('auth/loginWithCredential')

        if (!isAuthenticated)
            return {
                name: 'login',
            }
    }
})

export default router
