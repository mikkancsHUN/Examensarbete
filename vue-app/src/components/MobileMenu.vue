<template>
  <nav class="mobile-menu" :class="{ open: isOpen }">
    <ul class="mobile-menu__list">
      <li class="mobile-menu__list-item"><a href="/">Home</a></li>
      <li class="mobile-menu__list-item"><a href="/products">Products</a></li>
      <li class="mobile-menu__list-item"><a href="/cart">Cart</a></li>
      <li class="mobile-menu__list-item"><a href="/favorites">Favorites</a></li>
     </ul>
   <h1>Planet Saints</h1>
  </nav>
</template>

<script>
export default {
  name: 'MobileMenu',
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
  background-color: rgb(52 47 71 / 25%);
  height: 100%;
  width: 30rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  transform: translateX(-110%);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
}

.mobile-menu h1 {
    font-size: 1.6em;
    transform: scale(1, 0.7) translateY(-3rem);
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px var(--clr-heading-hover);
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
  line-height: 31.06px;
  font-size: 1.8em;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.1s;
  text-align: center;
}

.mobile-menu__list-item:hover {
  text-shadow: 0px 0px 10px var(--clr-hover);
  font-size: 2.2rem;
  transition: 0.2s;
}

.mobile-menu__list-item:active {
  text-shadow: 0px 0px 10px var(--clr-hover);
  font-size: 1.4rem;
}

.mobile-menu__list-item a {
  text-decoration: none;
  color: var(--clr-secondary);
}

@media screen and (max-width: 540px) {
  .mobile-menu {
    width: 100%;
  }
}

</style>
