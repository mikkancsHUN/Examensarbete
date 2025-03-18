<template>
    <section class="products__grid">
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
        <ProductsViewGridItem />
    </section>
</template>

<script>
import ProductsViewGridItem from './ProductsViewGridItem.vue';
export default {
    name: 'ProductsViewGrid',
    components: {
        ProductsViewGridItem
    }
}
</script>

<style>
.products__grid {
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
    .products__grid {
        grid-template-columns: repeat(3, 1fr);
        width: fit-content;
        margin: 0 auto;
    }
}

@media screen and (max-width: 720px) {
    .products__grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 376px) {
    .products__grid {
        grid-template-columns: 1fr;
    }
}

</style>

   
