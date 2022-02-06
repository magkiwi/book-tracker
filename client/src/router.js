import { createWebHistory, createRouter } from "vue-router";
import Register from './components/Register'
import Books from './components/Books'

const routes = [
        {
            path: '/',
            name: "Register",
            component: Register
        },
        {
            path: '/books',
            name: "Books",
            component: Books
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    
export default router;