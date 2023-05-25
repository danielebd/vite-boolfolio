<script >
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      apiUrlBase: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '/projects'
      },
      projects: []
    }
  },

  methods: {
    getProjects() {
      //concatenazione stringhe
      axios.get(this.apiUrlBase + this.apiUrls.projects)
        .then((response) => {
          this.projects = response.data.results;
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
  <AppHeader />
  <AppMain :data="projects"/>
  <AppFooter />
</template>

<style lang="scss" scoped></style>
