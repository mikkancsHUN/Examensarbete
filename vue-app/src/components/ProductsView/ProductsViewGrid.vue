<template>
  <section class="products__grid">
    <template v-if="filteredProducts.length > 0">
      <ProductsViewGridItem 
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </template>
    <p v-else class="no-products">There are no products available in this category.</p>
  </section>
</template>


<script>
import { ref, onMounted, computed } from "vue";
import ProductsViewGridItem from "./ProductsViewGridItem.vue";
import { selectedCategories } from "@/stores/categoryStore.js";

export default {
  name: 'ProductsViewGrid',
  components: {
    ProductsViewGridItem
  },
  setup() {
    const products = ref([]);

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://5ldfpe26m0.execute-api.eu-north-1.amazonaws.com/products");

        if (!response.ok) {
          throw new Error(`Hiba: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
          products.value = data.data;
        } else {
          console.error("API response format error:", data);
        }
      } catch (error) {
        console.error("An error occurred while calling the API:", error);
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

    return { products, filteredProducts };
  }
};
</script>


<style>
.products__grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2px;
    height: fit-content;
    width: fit-content;
    padding-top: 4rem;
}
.products__view .products__grid {
    padding-bottom: 4rem;
}

@media screen and (max-width: 1450px) {
  .products__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 1140px) {
  .products__grid {
        grid-template-columns: repeat(3, 1fr);
        width: fit-content;
        margin: 0 auto;
    }
}
@media screen and (max-width: 980px) {
  .products__grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 860px) {
  .products__grid {
        grid-template-columns: 1fr 1fr;
    }
}
</style>