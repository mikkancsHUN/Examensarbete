<template>
  <section class="favorites__view wrapper">
    <HeaderTop @show-login="showLogin = true" @show-signup="showSignUp = true" />
    <h2>Favorites</h2>

    <div v-if="favorites.length === 0" class="empty-favorites">
      <p>No favorite products yet.</p>
    </div>

    <div v-else class="products__grid wrapper">
      <ProductsGridItem v-for="p in favorites" :key="p.id" :product="p" :showFavoriteIcon="true"
        :showPurchaseButton="false" />

    </div>
  </section>
  <Login v-if="showLogin" @close="showLogin = false" />
  <SignUp v-if="showSignUp" @close="showSignUp = false" />
</template>

<script>
import { favorites } from "@/stores/favoritesStore.js";
import HeaderTop from '../components/Header/HeaderTop.vue';
import Login from '../components/SignIn/Login.vue'
import SignUp from '../components/SignIn/SignUp.vue'
import ProductsGridItem from "../components/Products/ProductsGridItem.vue";

export default {
  name: 'FavoritesView',
  components: {
    HeaderTop,
    Login,
    SignUp,
    ProductsGridItem
  },
  data() {
    return {
      defaultImage: "https://via.placeholder.com/150",
      showLogin: false,
      showSignUp: false
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

<style scoped>
.favorites__view {
  display: flex;
  flex-direction: column;
  min-height: 65vh;
  padding: 0rem 1rem 2rem 1rem;
  margin: auto;
  position: relative;
}

.favorites__view .products__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2px;
  height: fit-content;
  width: fit-content;
  padding-top: 4rem;
  margin: auto;

}

.favorites__view h2 {
  margin-top: 2rem;
}

.empty-favorites {
  text-align: center;
  font-size: 1.2rem;
  color: #999;
}

@media screen and (max-width: 980px) {
  .favorites__view .products__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 860px) {
  .favorites__view .products__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 768px) {
  .favorites__view .products__grid {
    padding-top: 1rem;
  }
}
</style>