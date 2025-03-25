<template>
    <section class="products__container wrapper">
        <Sidebar />
        <ProductsBox />
    </section>
</template>

<script>
import Sidebar from './Sidebar.vue'
import ProductsBox from './ProductsBox.vue'

export default {
    name: 'ProductsContainer',
    components: {
       Sidebar,
       ProductsBox
    }
}
</script>

<style>
.products__container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
}

@media screen and (max-width: 1191px) {
    .products__container {
        grid-template-columns: 1fr;
    }
}
</style>