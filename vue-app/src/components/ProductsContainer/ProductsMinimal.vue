<template>
    <section class="products__minimal">
        <h2>ProductsMinimal</h2>
        <ProductsShowcase />
        <ProductsShowcase />
        <ProductsShowcase />
    </section>
</template>

<script>
import ProductsShowcase from './ProductsShowcase.vue';
export default {
    name: 'ProductsMinimal',
    components: {
        ProductsShowcase
    }
}
</script>

<style>
.products__minimal {
    height: 33.3%;
    width: 100%;
    background: rgb(99, 99, 157);
    display: flex;
    gap: 1rem;
}
</style>