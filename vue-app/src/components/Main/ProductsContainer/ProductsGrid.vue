<template>
    <section class="products__grid">
      <ProductsGridItem 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
    </section>
  </template>
  
  <script>
  import ProductsGridItem from './ProductsGridItem.vue';
  import axios from 'axios';
  
  export default {
    name: 'ProductsGrid',
    components: {
      ProductsGridItem
    },
    data() {
      return {
        products: []
      };
    },
    async created() {
      try {
        const response = await axios.get('https://5ldfpe26m0.execute-api.eu-north-1.amazonaws.com/products');
        this.products = response.data.data.slice(0, 8);
      } catch (error) {
        console.error('Hiba történt az API hívás során:', error);
      }
    }
  };
  </script>
  

<style>
.home__view .products__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    width: fit-content;
    padding-top: 1rem;
    padding-bottom: 2rem;
    height: fit-content;
    margin: 0 auto;
}

@media screen and (max-width: 980px) {
    .home__view .products__grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 720px) {
    .home__view .products__grid {
        grid-template-columns: 1fr 1fr;
    }
}

</style>