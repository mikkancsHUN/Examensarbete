<template>
  <section class="home__view">
    <Header @show-login="showLogin = true" @show-signup="showSignUp = true" />
    <Main />
    <Login v-if="showLogin" @close="showLogin = false" />
    <SignUp v-if="showSignUp" @close="showSignUp = false" />
  </section>
</template>

<script>
import Header from '../components/Header/Header.vue'
import Main from '../components/Main/Main.vue';
import Login from '../components/SignIn/Login.vue'
import SignUp from '../components/SignIn/SignUp.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Main,
    Login,
    SignUp
  },
  data() {
    return {
      showLogin: false,
      showSignUp: false
    }
  }
}
</script>

<style></style>