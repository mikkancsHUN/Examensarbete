<template>
    <section class="products__box">
        <ProductsSpecial />
        <ProductsMain /> 
    </section>  
</template>

<script>
import ProductsSpecial from './ProductsSpecial.vue'
import ProductsMain from './ProductsMain.vue'
export default {
    name: 'ProductsBox',
    components: {
        ProductsSpecial,
        ProductsMain
    }
}
</script>

<style>
    .products__box {
        height: 100%;
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 1390px) {
        .products__box {
            max-width: 100%;
        }
    }
</style>