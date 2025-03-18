<template>
    <section class="home__view">
      <Header />
      <Main />
    </section>
  </template>
  
  <script>
  import Header from '../components/Header/Header.vue'
  import Main from '../components/Main/Main.vue';

  export default {
    name: 'HomeView',
    components: {
      Header,
      Main
    }
  }
  </script>
  
<style>
</style>