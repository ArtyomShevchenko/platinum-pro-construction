import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from "./routes.js"

const router = createRouter({
    // history: createWebHistory(),

    // createWebHashHistory work after build app
    history: createWebHashHistory(),
    routes,
})

export default router