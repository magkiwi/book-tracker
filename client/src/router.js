import { createWebHistory, createRouter } from "vue-router";
import Register from './components/Register'

const routes = [
        {
            path: '/',
            name: "Register",
            component: Register
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    
export default router;