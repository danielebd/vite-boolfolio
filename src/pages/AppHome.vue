<script>
import axios from 'axios';
export default {
    name: 'AppHome',
    data() {
        return {
            apiUrlBase: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            projects: [],
            projectPerPage: 6,

        }
    },
    methods: {
        getProjects() {
            //concatenazione stringhe
            axios.get(this.apiUrlBase + this.apiUrls.projects)
                .then((response) => {
                    this.projects = response.data.results;
                    console.log(response.data.results);
                })
                .catch((error) => {
                    console.log('error');
                })
        }
    },
    computed: {
        showProject() {
            return this.projects.filter((element, index) => index < this.projectPerPage);
        }
    },
    created() {
        this.getProjects()
    }
}
</script>

<template>
    <div>
        <div class="container">
            <div class="row my-3 gy-4">
                <div class="col col-md-4" v-for="project in showProject">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Start Date: {{ project.start_date }}</h6>
                            <p class="card-text">Description: <br>{{ project.description }}</p>
                            <p class="card-text">Type: {{ project.type ? project.type.name : 'N/A' }}</p>
                            <a href="#">
                                <router-link :to="{ name: 'project', params: { id: project.id, slug: project.slug } }"
                                    class="nav-link">
                                    Details
                                </router-link>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="text-center my-5">
                    <button class="btn btn-primary" @click.prevent="$event => projectPerPage += 6">Carica altri risultati</button>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped></style>