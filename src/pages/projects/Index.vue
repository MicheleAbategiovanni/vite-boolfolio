<template>
    <main>

        <div class="container py-3">

            <h1>Pagina progetti</h1>

            <div class="row py-5">

                <div class="col" v-for="project in projects">

                    <ProjectCard :project="project" />

                </div>

            </div>

        </div>

</main>
</template>


<script>
import axios from "axios";

import ProjectCard from "../../components/ProjectCard.vue";

export default {
    name: "ProjectIndex",
    components: { ProjectCard },
    data() {
        return {
            backendUrl: "http://localhost:8000",
            projects: [],
        };
    },
    methods: {
        fetchProjects() {
            axios.get(this.backendUrl + "/api/projects").then((resp) => {

                this.projects = resp.data.data;

            });
        }
    },
    mounted() {
        this.fetchProjects();
    },
}

</script>


<style lang="scss"></style>
