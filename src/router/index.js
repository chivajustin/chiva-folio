import {createRouter, createWebHistory} from "vue-router"
import Home from "../components/pages/Home.vue"
import About from "../components/pages/About.vue"
import Contact from "../components/pages/Contact.vue"
import SinglePost from "../components/SinglePost.vue"
import NotFound from "../components/NotFound.vue"


const router = createRouter ({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: '/home',
            redirect: { name: 'home' } 
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
        path: "/post/:id",
            name: "post",
            component: SinglePost
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: NotFound
        }
    ]
})
export default router
