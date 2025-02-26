<template>
    <div>
      <Header />
      <Carousel />
      <Main />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header/Header.vue'
  import Main from '../components/Main/Main.vue';
  import Footer from '../components/Footer/Footer.vue'
  import Carousel from '../components/Carousel/Carousel.vue';

  export default {
    name: 'HomeView',
    components: {
      Header,
      Carousel,
      Main,
      Footer
    }
  }
  </script>
  