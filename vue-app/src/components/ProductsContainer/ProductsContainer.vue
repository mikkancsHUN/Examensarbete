<template>
    <section class="products__container">
        <h2>ProductsContainer</h2>
        <ProductsMinimal />
        <ProductsSpecial />
        <ProductsMain />
    </section>
</template>

<script>
import ProductsMinimal from './ProductsMinimal.vue'
import ProductsSpecial from './ProductsSpecial.vue'
import ProductsMain from './ProductsMain.vue'

export default {
    name: 'ProductsContainer',
    components: {
        ProductsMinimal,
        ProductsSpecial,
        ProductsMain
    }
}
</script>

<style>
.products__container {
    height: 100%;
    width: 80%;
    padding: 3rem 1rem;
    border: 1px solid #ffffff;
}
</style>