<template>
  <section class="cart__view wrapper">
    <HeaderTop />
    <h2>Cart</h2>
    <div v-if="cart.length === 0" class="empty-cart">
      <p>Cart is empty.</p>
    </div>
    <div v-else>
      <ul class="cart-items">
        <li v-for="(item, index) in cart" :key="index" class="cart-item">
          <img :src="item.imageUrl || defaultImage" alt="Product Image" class="cart-item-image" />
          <div class="cart-item-info">
            <h3 class="cart__item-title">{{ item.name }}</h3>
            <p class="cart__item-detail">Price: ${{ item.price }}</p>
            <div class="cart__item-quantity">
              <button @click="updateQuantity(item, -1)" class="quantity-btn animated-btn">-</button>
              <span class="quantity-display">{{ item.quantity }}</span>
              <button @click="updateQuantity(item, 1)" class="quantity-btn animated-btn">+</button>
            </div>
            <p class="cart__item-detail">Total: ${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
        </li>
      </ul>
      <div class="cart-total">
        <p>Total: {{ totalPrice }}</p>
        <button @click="clearCart" class="remove animated-btn">Empty cart</button>
        <button @click="clearCart" class="purchase animated-btn">Finalize purchasing</button>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderTop from '@/components/Header/HeaderTop.vue'
import { computed } from 'vue';
import { cart, removeFromCart, clearCart } from "@/stores/cartStore.js";

export default {
  name: 'CartView',
  components: {
    HeaderTop
  },
  setup() {
    const totalPrice = computed(() => {
      const total = cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
    });

    // Mennyiség frissítése
    const updateQuantity = (item, change) => {
      item.quantity += change;
      if (item.quantity <= 0) {
        removeFromCart(item.id);
      } else {
        localStorage.setItem("cart", JSON.stringify(cart.value));
      }
    };

    return {
      cart,
      totalPrice,
      removeFromCart,
      clearCart,
      updateQuantity,
      defaultImage: "https://via.placeholder.com/150"
    };
  }
};
</script>


<style>
.cart__view {
  display: flex;
  flex-direction: column;
  min-height: 65vh;
  padding: 0 1rem 2rem 1rem;
  margin: auto;
  z-index: 1;
  position: relative;
}

.cart__view h2 {
  margin-top: 2rem;
}

.cart-items {
  list-style-type: none;
  padding: 2rem;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.cart-item-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 20px;
}

.cart__item-title {
  color:rgba(255, 255, 255, 0.75);
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.cart__item-detail {
  color:rgba(255, 255, 255, 0.75);
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  font-size: 1.1rem;
}

.cart-total {
  margin-top: 20px;
}
.cart-total p {
  font-size: 1.6rem;
  color:rgba(255, 255, 255, 0.75);
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
}

.quantity-display {
  margin: 0 7.5px;
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  font-size: 1.3rem;
}

.quantity-btn {
  padding: 10px;
}

.empty-cart {
  text-align: center;
  font-size: 1.2rem;
  color: #999;
}
.cart-total button {
  margin-right: 1rem;
}
/*.remove:hover {
  color: rgb(254, 134, 134);
  text-shadow: 0px 5px 10px rgb(218, 241, 203);
  border: 2px solid rgb(159, 62, 62);
  transition: 1s;
  box-shadow: 0px 0px 30px 1px rgba(255, 63, 63, 0.534);
}
.purchase:hover {
  color: rgb(179, 252, 179);
  text-shadow: 0px 5px 10px rgb(218, 241, 203);
  border: 2px solid rgb(145, 189, 127);
  transition: 1s;
  box-shadow: 0px 0px 30px 1px rgba(63, 255, 63, 0.534);
}*/
</style>