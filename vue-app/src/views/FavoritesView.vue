<template>
  <section class="favorites__view wrapper">
    <HeaderTop />
    <h2>Favorites</h2>
    
    <div v-if="favorites.length === 0" class="empty-favorites">
      <p>No favorite products yet.</p>
    </div>

    <div v-else class="products__grid wrapper" style="margin: auto;">
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
          <span 
            class="products__item-like material-symbols-outlined"
            :class="{ liked: isFavorite(product) }"
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
import { favorites } from "@/stores/favoritesStore.js";
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
    toggleFavorite(product) {
      if (this.isFavorite(product)) {
        const index = favorites.value.findIndex(item => item.id === product.id);
        if (index !== -1) {
          favorites.value.splice(index, 1);
        }
      } else {
        favorites.value.push(product);
      }
    },
    isFavorite(product) {
      return favorites.value.some(item => item.id === product.id);
    }
  }
};
</script>


<style>
 .products__grid-item:hover .products__item-like {
    transform: translateY(0);
  }

  .products__item-like {
    position: absolute;
    background: black;
    border-radius:0 0 5px 5px;
    width: 2.2rem;
    height: 3rem;
    top: 0px;
    right: 10px;
    transform: translateY(-100%);
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.material-symbols-outlined {
  color: var(--clr-icon);
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  transition: 0.1s;
}

.products__grid-item .material-symbols-outlined:hover {
  font-size: 1.8rem;
}

.liked {
  color: var(--clr-hover);
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
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
  height: 420px;
}
.favorites__view .products__item-info {
  height: 100%;
  padding: 1rem;
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