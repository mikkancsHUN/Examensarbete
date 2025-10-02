<template>
    <section v-if="product" class="product__details-view wrapper">
        <HeaderTop @show-login="showLogin = true" @show-signup="showSignUp = true" />
        <article>
            <img :src="product.imageUrl || defaultImage" alt="Product image" />
            <h2>{{ product.name }}</h2>
            <p>Category: {{ product.category }}</p>
            <p>Gender: {{ product.gender }}</p>
            <p class="price">${{ product.price }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
        </article>
    </section>
    <p v-else>Loading product...</p>
    <Login v-if="showLogin" @close="showLogin = false" />
    <SignUp v-if="showSignUp" @close="showSignUp = false" />
</template>

<script>
import HeaderTop from '../components/Header/HeaderTop.vue';
import Login from '../components/SignIn/Login.vue'
import SignUp from '../components/SignIn/SignUp.vue'
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { addToCart } from "@/stores/cartStore.js";

export default {
    name: "ProductDetails",
    components: {
        HeaderTop,
        Login,
        SignUp
    },
    data() {
        return {
            defaultImage: "https://via.placeholder.com/150",
            showLogin: false,
            showSignUp: false
        };
    },
    setup() {
        const route = useRoute();
        const product = ref(null);
        const defaultImage = "https://via.placeholder.com/150";

        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    `https://5ldfpe26m0.execute-api.eu-north-1.amazonaws.com/products/${route.params.id}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch product");
                }
                const data = await response.json();
                if (data.success && data.data) {
                    product.value = data.data;
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        onMounted(() => {
            fetchProduct();
        });

        return { product, defaultImage, addToCart };
    }
};
</script>

<style>
.product__details-view {
    display: flex;
    flex-direction: column;
    min-height: 65vh;
    padding: 0rem 1rem 2rem 1rem;
    margin: auto;
    position: relative;
}

.price {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>
