import { createRouter, createWebHistory } from "vue-router"
import Homepage from '../views/Homepage.vue'
import AboutUs from '../views/AboutUs.vue'
import Products from '../views/Products.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
    {
        path: '/', name: 'Homepage', component: Homepage
    },
    {
        path: '/about-us', name: 'AboutUs', component: AboutUs
    },
    {
        path: '/products/:category', name: 'Products', component: Products
    },
    {
        path: '/contact-us', name: 'ContactUs', component: ContactUs
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;