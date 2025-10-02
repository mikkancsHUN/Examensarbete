
<template>
  <header class="header">
        <HeaderTop 
          @show-login="$emit('show-login')"
          @show-signup="$emit('show-signup')"
        />
        <SearchInput />
        <Navbar />
    </header>
</template>

<script>
import HeaderTop from './HeaderTop.vue'
import Navbar from './Navbar.vue'
import SearchInput from './SearchInput.vue'

export default {
name: 'Header',
components: {
    HeaderTop,
    Navbar,
    SearchInput
  }
}
</script>

<style>
    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        position: relative;
}

@media screen and (max-width: 1395px) {
  .header {
      padding: 0px 1rem;
    }
}
</style>