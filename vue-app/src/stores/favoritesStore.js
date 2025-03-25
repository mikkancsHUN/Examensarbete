import { ref, watch } from "vue";

// Betöltjük a kedvenceket a localStorage-ból
const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
export const favorites = ref(savedFavorites);

// A kedvencek frissítése a localStorage-ban
const saveFavoritesToLocalStorage = () => {
  localStorage.setItem("favorites", JSON.stringify(favorites.value));
};

// Hozzáadjuk vagy eltávolítjuk a terméket a kedvencek közül (toggle funkció)
export const toggleFavorite = (product) => {
  const index = favorites.value.findIndex((item) => item.id === product.id);
  
  if (index !== -1) {
    // Ha már benne van, töröljük
    favorites.value.splice(index, 1);
  } else {
    // Ha nincs benne, hozzáadjuk
    favorites.value.push(product);
  }

  saveFavoritesToLocalStorage();
};

// Figyeljük a favorites változót és frissítjük a localStorage-ot
watch(favorites, saveFavoritesToLocalStorage, { deep: true });

// Kiürítjük a kedvenceket
export const clearFavorites = () => {
  favorites.value = [];
};
