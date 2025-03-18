<template>
    <aside class="products__sidebar">
        <Category />
    </aside>
</template>

<script>
import Category from './Category.vue';
export default {
    name: 'Sidebar',
    components: {
        Category
    }
}
</script>

<style>
.products__sidebar {
    max-width: 360px;
    min-width: 360px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 1390px) {
    .products__sidebar {
        width: 100%;
        min-width: 200px;
    }
}

@media screen and (max-width: 1191px) {
    .products__sidebar {
        display: none;
    }
}

</style>