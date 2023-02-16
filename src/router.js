import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import ProjectsIndexPage from "./pages/projects/Index.vue";
import ProjectsShowPage from "./pages/projects/Show.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            // Show all project page
            path: "/projects",
            name: "projects.index",
            component: ProjectsIndexPage,
        },
        {
            // Show single project page
            path: "/projects/:id",
            name: "projects.show",
            component: ProjectsShowPage
        }
    ]
});

export { router };