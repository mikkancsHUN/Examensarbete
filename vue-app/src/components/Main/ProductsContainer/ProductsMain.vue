<template>
    <section class="products__main">
        <h2>Products</h2>
        <ProductsGrid />
        <a class="animated-btn" href="/products">See all</a>
    </section>
</template>

<script>
import ProductsGrid from './ProductsGrid.vue';
export default {
    name: 'ProductsMain',
    components: {
        ProductsGrid
    }
}
</script>

<style>
.products__main {
    height: 100%;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 4rem;
}
.products__main h2 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 1px solid var(--clr-light);
}

.products__main a {
    text-decoration: none;
    background-color: black;
    font-size: 1.2rem;
    width: 150px;
    display: block;
    text-align: center;
    margin: auto;
}

@media screen and (max-width: 884px) {
    .products__main {
        padding: 1rem;
    }
}
</style>