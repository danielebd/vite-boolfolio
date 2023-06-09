import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue'
import AppProject from './pages/AppProject.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/:id/:slug',
            name: 'project',
            component: AppProject
        }
    ]
});

export {router};