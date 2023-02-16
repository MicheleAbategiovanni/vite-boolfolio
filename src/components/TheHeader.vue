<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark">

            <div class="container">

                <div class="d-flex">
                    <a class="navbar-brand text-white" href="/">Michele Abategiovanni</a>
                </div>

                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation" @click="onClickHamburger">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">

                    <div class="row p-2 align-items-center">

                        <div class="col">
                            <ul class="navbar-nav  mb-2 mb-lg-0 ">

                                <li class="nav-item" v-for="(item, index) in items" :key="index">
                                    <router-link :to="{ name: item.routeName }" class="nav-link text-secondary active-link">
                                        {{ item.label }}
                                    </router-link>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>

            </div>

        </nav>
</header>
</template>
  
<script>
export default {
    name: "TheHeader",
    data() {
        return {
            items: [
                {
                    label: "Home",
                    routeName: "home",
                },
                {
                    label: "Progetti",
                    routeName: "projects.index",
                },
            ],
        };
    },
};
</script>
  
<style scoped lang="scss"></style>