<template>
    <div class="container">

        <h2>{{ project.title }}</h2>

        <img :src="backendUrl + '/storage/' + project.thumb" alt="" class="img-fluid" />


        <p class="lead">{{ project.description }}</p>

</div>
</template>


<script>
import axios from "axios";
export default {
    name: "ProjectsShow",
    data() {
        return {
            backendUrl: "http://localhost:8000",
            project: {},
        };
    },
    mounted() {
        axios
            .get(this.backendUrl + "/api/projects/" + this.$route.params.id)
            .then((resp) => {
                this.project = resp.data;
            })
            .catch((er) => {
                this.$router.push({ name: "projects.index" });
            });
    },
};
</script>