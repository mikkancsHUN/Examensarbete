<template>
  <section class="products__grid">
    <template v-if="filteredProducts.length > 0">
      <ProductsGridItem 
        v-for="product in filteredProducts.slice(0, 8)" 
        :key="product.id" 
        :product="product" 
      />
    </template>
    <p v-else class="no-products">There are no products available in this category.</p>
  </section>
</template>


<script>
import { computed, ref, onMounted } from "vue";
import ProductsGridItem from './ProductsGridItem.vue';
import axios from 'axios';
import { selectedCategories } from "@/stores/categoryStore.js";

export default {
  name: 'ProductsGrid',
  components: {
    ProductsGridItem
  },
  setup() {
    const products = ref([]);

    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://5ldfpe26m0.execute-api.eu-north-1.amazonaws.com/products');
        products.value = response.data.data;
      } catch (error) {
        console.error('An error occurred during the API call:', error);
      }
    };

    onMounted(() => {
      fetchProducts();
    });
    
    const filteredProducts = computed(() => {
      if (selectedCategories.value.length === 0) {
        return products.value;
      }
      return products.value.filter(product => 
        selectedCategories.value.includes(product.category)
      );
    });

    return {
      products,
      filteredProducts
    };
  },
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
    min-height: 400px;
}

.no-products {
    font-size: 1.2rem;
    color: #888;
    margin: auto;
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