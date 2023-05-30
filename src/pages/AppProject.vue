<script>
import axios from 'axios';

export default {
    name: 'AppProject',
    data(){
        return {
            apiUrlBase: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: null,
            isError: false,
            errorMessage: null
        }
    },
    methods: {
        getProject(){
            axios.get(this.apiUrlBase + this.apiUrls.projects + '/' + this.$route.params.slug)
            .then((response) => {
                console.log(response);
                this.project = response.data.results
            })
            .catch((error) => {
                this.isError = true;
                this.errorMessage = error.message;
            })
        }
    },
    created(){
        this.getProject();
    }
}
</script>

<template>
    <section v-if="project">
        <h1 class="mt-5 mb-5">{{ project.title }}</h1>
        <p>Description: {{ project.description }}</p>
    </section>
    <section v-if="isError">
        <h1 class="mt-5 mb-5">{{ errorMessage }}</h1>
    </section>
</template>

<style scoped>

</style>