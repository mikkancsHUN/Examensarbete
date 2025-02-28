<template>
  <div class="VueApp">
    <BackgroundAnimation />
    <router-view />
    
  </div>
</template>

<script>
import BackgroundAnimation from "./components/BackgroundAnimation.vue";
export default {
  name: "App",
  components: {
    BackgroundAnimation
  }
};
</script>

<style>
/* Globális stílusok */
.VueApp {
  font-family: 'Roboto', sans-serif;
  color: rgb(255, 255, 255);
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: var(--clr-background); 
  background-attachment: fixed;
}
</style>
