<template>
  <TheHeader></TheHeader>

  <router-view></router-view>
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


<style lang="scss">@use "styles/main"</style>
