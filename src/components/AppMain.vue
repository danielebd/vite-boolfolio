
<script>
export default {
    name: 'AppMain',
    props: {
        data: Object
    }
}
</script>

<template>
    <div>
        <div class="container">
            <div class="row my-3 gy-4">
                <div class="col col-md-4" v-for="project in data">
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Start Date: {{ project.start_date }}</h6>
                            <p class="card-text">Description: <br>{{ project.description }}</p>
                            <p class="card-text">Type: {{ project.type.name }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped></style>