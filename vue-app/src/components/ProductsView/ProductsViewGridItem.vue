<template>
  <article class="products__grid-item">
    <img :src="product.imageUrl || defaultImage" alt="Product Image">
    <div class="products__item-wrapper">
      <div class="products__item-info">
        <h3 class="products__item-title">{{ product.name }}</h3>
        <div>
          <span class="products__item-category">{{ product.gender || "No Gender" }}</span>
          <span class="products__item-category">{{ product.category || "No Category" }}</span>
        </div>
        <span class="products__item-price">${{ product.price }}</span>
        <span 
          class="products__item-like material-symbols-outlined"
          :class="{ liked: isFavorite }"
          @click="toggleFavorite(product)"
        >
          favorite
        </span>
      </div>
      <button @click="addToCart(product)" class="animated-btn">Purchase</button>
    </div>
  </article>
</template>

<script>
import { computed } from "vue";
import { favorites, toggleFavorite } from "@/stores/favoritesStore.js";
import { addToCart } from "@/stores/cartStore.js";

export default {
  name: 'ProductsViewGridItem',
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

  <style>
  .products__grid-item {
      background: black;
      border-radius: 0.25rem;
      display: grid;
      grid-template-rows: auto 1fr;
      transition: 0.2s;
      cursor: pointer;
      max-width: 270px;
      width: 270px;
      height: 455px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
  }

  .products__item-wrapper {
    padding: 1rem;
    height: 100%;
    width: 100%;
  }

  .products__item-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 0;
      width: 100%;
      height: 70%;
  }
  
  .products__grid-item img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
  }

  .products__grid-item button {
      width: 100%;
  }
  
  .products__item-title {
    color:rgba(255, 255, 255, 0.75);
    font-family: 'Syne', sans-serif;
    text-transform: uppercase;
    font-size: 1.1rem;
  }
  
  .products__item-category {
      color:rgba(255, 255, 255, 0.75);
      font-family: 'Syne', sans-serif;
      text-transform: uppercase;
      font-size: 0.9rem;
      margin-right: 10px;
  }
  
  .products__item-price {
      color:rgba(255, 255, 255, 0.75);
      font-size: 1.3rem;
  }

  /* Top */
  .products__grid-item:hover .products__item-like {
    transform: translateY(0);
  }

  .products__item-like {
    position: absolute;
    background: black;
    border-radius:0 0 5px 5px;
    padding: 10px 5px;
    top: 0px;
    right: 10px;
    transform: translateY(-100%);
  }

  /* Rigth */
  /*.products__grid-item:hover .products__item-like {
    transform: translateX(0);
  }

  .products__item-like {
    position: absolute;
    background: black;
    border-radius: 5px 0 0 5px;
    padding: 5px 10px;
    top: 10px;
    right: 0;
    transform: translateX(100%);
  }

  .products__item-like:active {
    transform: scale(1);
  }*/

@media screen and (max-width: 577px) {
    .products__grid-item {
      height: 400px;
      width: 203px;
      margin: 0;
    }
    .products__item-title {
    color:rgba(255, 255, 255, 0.75);
    font-family: 'Syne', sans-serif;
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  .products__item-category {
    color:rgba(255, 255, 255, 0.75);
    font-family: 'Syne', sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

.products__item-price {
    color:rgba(255, 255, 255, 0.75);
    text-transform: uppercase;
    font-size: 1rem;
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
      width: 155px;
    }
}
  </style>