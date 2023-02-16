<template>
    <main>

        <!-- <div class="container py-3">

            <h1>PAgina progetti</h1>

            <div class="row py-5">

                <div class="col" v-for="project in projects">

                    <ProjectCard :project="project" />

                </div>

            </div>

        </div> -->

        <h1>CIAO PPROGETTI</h1>

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


                // SE NON FACCIO COSI' HO COME RISPOSTA DATA E IN DATA I RELATIVI PROGETTI
                this.projects = resp.data.data;

                console.log(this.projects);

            });
        }
    },
    mounted() {
        this.fetchProjects();
    },
}

</script>


<style lang="scss"></style>
