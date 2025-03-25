<template>
  <div class="hamburger animated-btn" @click="$emit('toggle-menu')">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
    name: 'HamburgerMenu',
}
</script>

<style>
.hamburger {
    position: fixed;
    top: -3px;
    left: -10px;
    transform: scale(0.4);
    z-index: 99;
}

.hamburger .line{
  width: 50px;
  height: 5px;
  background-color: var(--clr-primary);
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
</style>