import { ref, watch } from "vue";

const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
export const favorites = ref(savedFavorites);

const saveFavoritesToLocalStorage = () => {
  localStorage.setItem("favorites", JSON.stringify(favorites.value));
};

export const toggleFavorite = (product) => {
  const index = favorites.value.findIndex((item) => item.id === product.id);
  
  if (index !== -1) {
    favorites.value.splice(index, 1);
  } else {
    favorites.value.push(product);
  }

  saveFavoritesToLocalStorage();
};

watch(favorites, saveFavoritesToLocalStorage, { deep: true });

export const clearFavorites = () => {
  favorites.value = [];
};
