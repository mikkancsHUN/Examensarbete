<template>
  <section class="favorites__view wrapper">
    <HeaderTop />
    <h2>Favorites</h2>
    
    <div v-if="favorites.length === 0" class="empty-favorites">
      <p>No favorite products yet.</p>
    </div>

    <div v-else class="products__grid">
      <article 
        v-for="product in favorites" 
        :key="product.id"
        class="products__grid-item"
      >
        <img :src="product.imageUrl || defaultImage" alt="Product Image">
        <div class="products__item-info">
          <h3 class="products__item-title">{{ product.name }}</h3>
          <div>
            <span class="products__item-category">{{ product.gender || "No Gender" }}</span>
            <span class="products__item-category">{{ product.category || "No Category" }}</span>
          </div>
          <span class="products__item-price">${{ product.price }}</span>

          <!-- Like gomb a törléshez -->
          <span 
            class="products__item-like material-symbols-outlined liked"
            @click="toggleFavorite(product)"
          >
            favorite
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { favorites, toggleFavorite } from "@/stores/favoritesStore.js";
import HeaderTop from '@/components/Header/HeaderTop.vue';

export default {
  name: 'FavoritesView',
  components: {
    HeaderTop
  },
  data() {
    return {
      defaultImage: "https://via.placeholder.com/150"
    };
  },
  computed: {
    favorites() {
      return favorites.value;
    }
  },
  methods: {
    toggleFavorite
  }
};
</script>


<style>
.products__item-like,
.products__grid-item .material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

.liked {
  color: var(--clr-hover);
}

.favorites__view {
  display: flex;
  flex-direction: column;
  min-height: 65vh;
  padding: 0rem 1rem 2rem 1rem;
  margin: auto;
  z-index: 1;
  position: relative;
}

.favorites__view h2 {
  margin-top: 2rem;
}

.favorites__view .products__grid-item {
  height: 440px;
}
.favorites__view .products__item-info {
  padding-bottom: 1rem;
}

.empty-favorites {
  text-align: center;
  font-size: 1.2rem;
  color: #999;
}

@media screen and (max-width: 577px) {
    .favorites__view .products__grid-item {
      height: 320px;
    }
}  
</style>