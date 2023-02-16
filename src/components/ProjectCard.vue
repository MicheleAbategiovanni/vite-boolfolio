<template>

    <div class="card h-100" style="width: 18rem;">
        <img :src="backendUrl + '/storage/' + project.thumb" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            <p class="card-text">{{project.description}}</p>
            <router-link :to="{ name: 'projects.show', params: {id: project.id} }" class="btn btn-primary">Visualizza</router-link>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        project: Object,
    },
    data(){
        return{
            backendUrl: "http://localhost:8000",
        }
    }
}
</script>


<style lang="scss" scoped></style>