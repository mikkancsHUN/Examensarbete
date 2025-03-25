<template>
    <main class="main">
        <Carousel />
        <ProductsContainer />
        <About />
    </main>
</template>

<script>
import Carousel from './../Carousel/Carousel.vue'
import ProductsContainer from './ProductsContainer/ProductsContainer.vue'
import About from './About.vue';

export default {
    name: 'Main',
    components: {
        Carousel,
        ProductsContainer,
        About
    },
}
</script>

<style>
.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    position: relative;
}
</style>