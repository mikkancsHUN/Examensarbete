<template>
    <section class="products__grid">
      <ProductsViewGridItem 
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import ProductsViewGridItem from "./ProductsViewGridItem.vue";
  
  export default {
    name: 'ProductsViewGrid',
    components: {
      ProductsViewGridItem
    },
    setup() {
      const products = ref([]);
  
      const fetchProducts = async () => {
        try {
          const response = await fetch(
            "https://5ldfpe26m0.execute-api.eu-north-1.amazonaws.com/products"
          );
  
          if (!response.ok) {
            throw new Error(`Hiba: ${response.status} - ${response.statusText}`);
          }
  
          const data = await response.json();
          if (data.success && Array.isArray(data.data)) {
            products.value = data.data;
          } else {
            console.error("API válasz formátum hiba:", data);
          }
        } catch (error) {
          console.error("Hiba történt az API hívás közben:", error);
        }
      };
  
      onMounted(() => {
        fetchProducts();
      });
  
      return { products };
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