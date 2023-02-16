<template>
  <TheHeader></TheHeader>

  <h1 class="bg-danger">Hello</h1>

  <main>

    <div class="container">

      <ProjectCard v-for="(project, index) in projects" />

    </div>

</main>
</template>


<script>
import axios from "axios";

import TheHeader from "./components/TheHeader.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  components: { TheHeader, ProjectCard },
  data() {
    return {
      backendUrl: "http://localhost:8000",
      projects: [],
    };
  },
  methods: {
    fetchProjects() {
      axios.get(this.backendUrl + "/api/projects").then((resp) => {

        this.projects = resp.data;

        console.log(this.projects);

      });
    }
  },
  mounted() {
    this.fetchProjects();
  },
}

</script>


<style lang="scss">@use "styles/main"</style>
