<template>
  <nav class="mobile-menu" :class="{ open: isOpen }">
    <ul class="mobile-menu__list">
      <li class="mobile-menu__list-item"><a href="/">Home</a></li>
      <li class="mobile-menu__list-item"><a href="#">About</a></li>
      <li class="mobile-menu__list-item"><a href="#">Services</a></li>
      <li class="mobile-menu__list-item"><a href="#">Contact</a></li>
     </ul>
   <h1>Planet Saints</h1>
  </nav>
</template>

<script>
export default {
  props: {
    isOpen: Boolean
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        this.animateMenu();
      }
    }
  },
  methods: {
    animateMenu() {
      anime({
        targets: '.mobile-menu__list-item',
        translateX: -200,
        duration: 0,
        opacity: 0,
      });

      anime({
        targets: '.mobile-menu__list-item',
        translateX: 0,
        delay: anime.stagger(100),
        opacity: 1
      });
    }
  }
}
</script>

<style>
.mobile-menu {
  background-color: rgba(0, 0, 0, 0.99);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  transform: translateX(-110%);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mobile-menu h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6em;
    transform: scale(1, 0.7) translateY(-3rem);
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px var(--clr-heading-hover);
    text-decoration: none;
    color: var(--clr-main-heading);
    user-select: none;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu__list {
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 5%;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.mobile-menu__list-item {
  margin: 1rem 0;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  line-height: 31.06px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: 0.1s;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 2em;
  transform: scale(1, 0.76);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.1s;
  text-align: center;
}

.mobile-menu__list-item:hover {
  text-shadow: 0px 0px 10px var(--clr-hover);
  font-size: 2.4rem;
  transition: 0.2s;
}

.mobile-menu__list-item:active {
  text-shadow: 0px 0px 10px var(--clr-hover);
  font-size: 1.6rem;
}

.mobile-menu__list-item a {
  text-decoration: none;
  color: var(--clr-secondary);
}

</style>
