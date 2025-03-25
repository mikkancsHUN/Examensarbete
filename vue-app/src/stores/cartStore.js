import { ref } from "vue";

// Betöltjük a kosár adatokat a localStorage-ból, ha léteznek
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
export const cart = ref(savedCart);

// A kosár frissítése a localStorage-ban
const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

// Hozzáadjuk a terméket a kosárhoz
export const addToCart = (product) => {
  const existingProduct = cart.value.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
  saveCartToLocalStorage(); // Frissítjük a localStorage-ot
};

// Eltávolítjuk a terméket a kosárból
export const removeFromCart = (productId) => {
  cart.value = cart.value.filter((item) => item.id !== productId);
  saveCartToLocalStorage(); // Frissítjük a localStorage-ot
};

// Kiürítjük a kosarat
export const clearCart = () => {
  cart.value = [];
  saveCartToLocalStorage(); // Frissítjük a localStorage-ot
};
