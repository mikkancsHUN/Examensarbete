import { ref } from "vue";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
export const cart = ref(savedCart);

const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

export const addToCart = (product) => {
  const existingProduct = cart.value.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
  saveCartToLocalStorage();
};

export const removeFromCart = (productId) => {
  cart.value = cart.value.filter((item) => item.id !== productId);
  saveCartToLocalStorage();
};

export const clearCart = () => {
  cart.value = [];
  saveCartToLocalStorage();
};
