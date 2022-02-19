import { createWebHistory, createRouter } from "vue-router";
import Register from './components/Register'
import Books from './components/Books'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'

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
        },
        {
            path: '/books/add',
            name: "AddBook",
            component: AddBook
        },
        {
            path: '/book/:id',
            name: "Book",
            component: ViewBook
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    
export default router;