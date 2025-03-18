<template>
    <section class="products__grid">
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />
        <ProductsGridItem />

    </section>
</template>

<script>
import ProductsGridItem from './ProductsGridItem.vue';
export default {
    name: 'ProductsGrid',
    components: {
        ProductsGridItem
    }
}
</script>

<style>
.home__view .products__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    width: 100%;
    padding: 1rem 0  2rem 0;
    height: fit-content;
}

.products__view .products__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-content: center;
    padding: 20px;
}



@media screen and (max-width: 980px) {
    .home__view .products__grid {
        grid-template-columns: repeat(3, 1fr);
        width: fit-content;
        margin: 0 auto;
    }
}

@media screen and (max-width: 720px) {
    .home__view .products__grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 376px) {
    .home__view .products__grid {
        grid-template-columns: 1fr;
    }
}

</style>

   
