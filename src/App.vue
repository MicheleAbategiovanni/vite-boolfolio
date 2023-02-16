<template>
  <TheHeader></TheHeader>

<router-view></router-view>
</template>


<script>
import axios from "axios";

import TheHeader from "./components/TheHeader.vue";

export default {
  components: { TheHeader},
  data() {
    return {

    };
  }
}

</script>


<style lang="scss">@use "styles/main"</style>
