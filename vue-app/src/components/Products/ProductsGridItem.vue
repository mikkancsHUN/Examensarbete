<template>
    <article class="products__grid-item">
        <span v-if="showFavoriteIcon" class="products__item-like material-symbols-outlined"
            :class="{ liked: isFavorite }" @click.stop="toggleFavorite(product)">
            favorite
        </span>

        <router-link :to="`/products/${product.id}`" class="products__link">
            <img :src="product.imageUrl || defaultImage" alt="Product Image" />
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

        <button v-if="showPurchaseButton" @click.prevent="addToCart(product)" class="animated-btn">
            Purchase
        </button>
    </article>
</template>

<script>
import { favorites, toggleFavorite } from "@/stores/favoritesStore.js";
import { addToCart } from "@/stores/cartStore.js";

export default {
    name: "ProductsGridItem",
    props: {
        product: { type: Object, required: true },
        showPurchaseButton: { type: Boolean, default: true },
        showFavoriteIcon: { type: Boolean, default: true },
    },
    data() {
        return {
            defaultImage: "https://via.placeholder.com/150",
        };
    },
    computed: {
        isFavorite() {
            return favorites.value.some((item) => item.id === this.product.id);
        },
    },
    methods: {
        addToCart,
        toggleFavorite,
    },
};
</script>

<style scoped>
/* STYLES FOR PRODUCTSGRIDITEM IN HOMEVIEW */
.home__view .products__grid-item {
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

.home__view .products__link {
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

.home__view .products__grid-item img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

.home__view .products__item-wrapper {
    height: 100%;
    padding: 1rem 1rem 0 1rem;
}

.home__view .products__item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    flex-grow: 1;
}

.home__view .products__item-title {
    color: rgba(255, 255, 255, 0.75);
    font-family: 'Syne', sans-serif;
    text-transform: uppercase;
    font-size: 0.9rem;
}

.home__view .products__item-category {
    color: rgba(255, 255, 255, 0.75);
    font-family: 'Syne', sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
}

.home__view .products__item-price {
    color: rgba(255, 255, 255, 0.75);
    text-transform: uppercase;
    font-size: 1rem;
}

@media screen and (max-width: 1212px) {
    .home__view .products__grid-item {
        width: 226px;
    }
}

@media screen and (max-width: 1191px) {
    .home__view .products__grid-item {
        width: 232px;
    }
}

@media screen and (max-width: 513px) {
    .home__view .products__grid-item {
        height: 360px;
        width: 170px;
    }
}

@media screen and (max-width: 400px) {
    .home__view .products__grid-item {
        height: 360px;
        width: 155px;
    }
}

/* SHARED STYLES FOR PRODUCTSGRIDITEM IN PRODUCTSVIEW AND FAVORITESVIEW */
.products__view .products__grid-item,
.favorites__view .products__grid-item {
    background: rgb(0, 0, 0);
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.2s;
    cursor: pointer;
    max-width: 270px;
    width: 270px;
    height: 460px;
    overflow: hidden;
    position: relative;
}

.favorites__view .products__grid-item {
    height: 420px;
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

.products__item-wrapper {
    height: 100%;
    padding: 1rem 1rem 0 1rem;
}

.favorites__view .products__item-wrapper {
    padding: 1rem;
}

.products__item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    flex-grow: 1;
}

.products__grid-item img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

.products__item-title {
    color: rgba(255, 255, 255, 0.75);
    font-family: 'Syne', sans-serif;
    text-transform: uppercase;
    font-size: 1.1rem;
}

.products__item-category {
    color: rgba(255, 255, 255, 0.75);
    font-family: 'Syne', sans-serif;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-right: 10px;
}

.products__item-price {
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.3rem;
}

@media screen and (max-width: 1212px) {

    .products__view .products__grid-item,
    .favorites__view .products__grid-item {
        width: 226px;
    }
}

@media screen and (max-width: 1191px) {

    .products__view .products__grid-item,
    .favorites__view .products__grid-item {
        width: 232px;
    }
}

@media screen and (max-width: 513px) {

    .products__view .products__grid-item {
        height: 360px;
        width: 155px;
    }

    .favorites__view .products__grid-item {
        height: 320px;
        width: 155px;
    }

    .products__item-title {
        font-size: 0.9rem;
    }

    .products__item-category {
        font-size: 0.8rem;
    }

    .products__item-price {
        font-size: 1rem;
    }

    .products__item-wrapper {
        padding: 1rem 1rem 0 1rem;
    }

    .favorites__view .products__item-wrapper {
        padding: 1rem;
    }
}

/* LIKE BUTTON */
.products__grid-item:hover .products__item-like {
    transform: translateY(0);
}

.products__item-like {
    position: absolute;
    background: black;
    border-radius: 0 0 5px 5px;
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
</style>
