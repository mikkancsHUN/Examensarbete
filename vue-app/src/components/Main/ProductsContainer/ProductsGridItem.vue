<template>
  <article class="products__grid-item">
    <span class="products__item-like material-symbols-outlined" :class="{ liked: isFavorite }"
      @click="toggleFavorite(product)">
      favorite
    </span>
    <router-link :to="`/products/${product.id}`" class="products__link">
      <img :src="product.imageUrl || defaultImage" alt="Product Image">
      <div class="products__item-wrapper">
        <div class="products__item-info">
          <h3 class="products__item-title">{{ product.name }}</h3>
          <div>
            <span class="products__item-category">{{ product.gender || "No Gender" }}</span>
            <span class="products__item-category">{{ product.category || "No Category" }}</span>
          </div>
          <span class="products__item-price">${{ product.price }}</span>
        </div>
      </div>
    </router-link>
    <button @click="addToCart(product)" class="animated-btn">Purchase</button>
  </article>
</template>

<script>
import { favorites, toggleFavorite } from "@/stores/favoritesStore.js";
import { addToCart } from "@/stores/cartStore.js";

export default {
  name: 'ProductsGridItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      defaultImage: "https://via.placeholder.com/150"
    };
  },
  computed: {
    isFavorite() {
      return favorites.value.some(item => item.id === this.product.id);
    }
  },
  methods: {
    addToCart,
    toggleFavorite
  }
};
</script>

<style scoped>
.products__grid-item {
  background: rgb(0, 0, 0);
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 400px;
  max-width: 232px;
  width: 232px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.products__link {
  color: inherit;
  text-decoration: none;
  height: fit-content;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  text-align: left;
}

.products__grid-item img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.products__item-wrapper {
  height: 100%;
  padding: 1rem 1rem 0 1rem;
}

.products__item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
  flex-grow: 1;
}

.products__item-title {
  color: rgba(255, 255, 255, 0.75);
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.products__item-category {
  color: rgba(255, 255, 255, 0.75);
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.products__item-price {
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  font-size: 1rem;
}

.products__grid-item button {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  flex-shrink: 0;
  height: 60px;
  max-height: 60px;
}

@media screen and (max-width: 1212px) {
  .products__grid-item {
    width: 226px;
  }
}

@media screen and (max-width: 1191px) {
  .products__grid-item {
    width: 232px;
  }
}

@media screen and (max-width: 442px) {
  .products__grid-item {
    height: 360px;
    width: 170px;
  }
}

@media screen and (max-width: 400px) {
  .products__grid-item {
    height: 360px;
    width: 155px;
  }
}
</style>