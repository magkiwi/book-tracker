import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import Register from './components/Register'

const routes = [
        {
            path: '/',
            name: "App",
            component: App
        },
        {
            path: '/register',
            name: "Register",
            component: Register
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    
export default router;