
<template>
  <header class="header">
        <HeaderTop />
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
    }
</style>