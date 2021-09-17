import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Produit from '../views/Produit.vue'
import Summer from '../views/Summer.vue'
import Winter from '../views/Winter.vue'
import Search from '../views/Search.vue'




const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {path: '/:product_slug/',name: 'product',component: Produit},
    { path: '/Summer/',name: 'summer',component: Summer},
    { path: '/Winter/',name: 'Winter',component: Winter},
    { path: '/Search/',name: 'Search',component: Search},



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;