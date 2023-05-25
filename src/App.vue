<script >
import axios from 'axios';
import HelloApp from './components/HelloApp.vue';
export default {
  name: 'App',
  data() {
    return {
      apiUrlBase: 'http://127.0.0.1:8000/api',
      apiUrl: {
        projects: '/projects'
      },
      projects: []
    }
  },
  components: {
    HelloApp
  },
  methods: {
    getProjects() {
      //concatenazione stringhe
      axios.get(this.apiUrlBase + this.apiUrl.projects).then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('error');
      })
    }
  },
  created() {
    this.getProjects()
  }
}
</script>

<template>
  <HelloApp />
</template>

<style lang="scss" scoped></style>
