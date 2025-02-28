<template>
    <main class="main__container">
        <Sidebar />
        <ProductsContainer />
    </main>
</template>

<script>
import Sidebar from '../ProductsContainer/Sidebar.vue';
import ProductsContainer from '../ProductsContainer/ProductsContainer.vue';
export default {
    name: 'Main',
    components: { 
        Sidebar,
        ProductsContainer 
    },
}
</script>

<style>
.main__container {
    display: flex;
    justify-content: center;
    height: 70vh;
    width: 100%;
}
</style>