import { createRouter, createWebHistory } from "vue-router"
import AboutUs from '../views/AboutUs.vue'
import Products from '../views/ProductsPage.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
    {
        path: '/',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/products',
        name: 'ProductsPage',
        component: Products
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;