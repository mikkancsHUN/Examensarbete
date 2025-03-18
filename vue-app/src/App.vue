<template>
  <div class="VueApp">
    <HamburgerMenu @toggle-menu="menuOpen = !menuOpen" />
    <MobileMenu :isOpen="menuOpen" />
    <BackgroundAnimation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { ref } from "vue";
import HamburgerMenu from "./components/HamburgerMenu.vue"
import MobileMenu from "./components/MobileMenu.vue";
import BackgroundAnimation from "./components/BackgroundAnimation.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    HamburgerMenu,
    MobileMenu,
    BackgroundAnimation,
    Footer
  },
  setup() {
    const menuOpen = ref(false);
    return { menuOpen };
  },
};
</script>

<style>
.VueApp {
  font-family: 'Roboto', sans-serif;
  color: var(--clr-primary);
  width: 100%;
  height: 100%;
  max-width: 100vw;
  min-height: 100vh;
  background: var(--clr-background); 
  background-attachment: fixed;
}
</style>
