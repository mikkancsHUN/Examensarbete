<template>
  <Header style="background-color: rgba(0, 0, 0, 0.5);" @show-login="showLogin = true"
    @show-signup="showSignUp = true" />
  <section class="products__view">
    <h2 class="products__view-heading">Products</h2>
    <Category style="margin: auto;" />
    <ProductsViewGrid class="wrapper" style="margin: auto;" />
    <Login v-if="showLogin" @close="showLogin = false" />
    <SignUp v-if="showSignUp" @close="showSignUp = false" />
  </section>
</template>

<script>
import Header from '../components/Header/Header.vue'
import SearchInput from '../components/Header/SearchInput.vue'
import Category from '../components/Main/ProductsContainer/Category.vue'
import ProductsViewGrid from '../components/ProductsView/ProductsViewGrid.vue';
import Login from '../components/SignIn/Login.vue'
import SignUp from '../components/SignIn/SignUp.vue'

export default {
  name: 'ProductsView',
  components: {
    Header,
    SearchInput,
    Category,
    ProductsViewGrid,
    Login,
    SignUp
  },
  data() {
    return {
      showLogin: false,
      showSignUp: false
    }
  },
  mounted() {
    const checkboxes = document.querySelectorAll('.filter-checkbox');

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        const label = event.target.closest('.products__view .filter-btn');
        if (event.target.checked) {
          label.classList.add('selected');
        } else {
          label.classList.remove('selected');
        }
      });
    });
  },
};

</script>

<style>
.products__view {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  min-height: 65vh;
  padding: 0 1rem 2rem 1rem;
  margin: auto;
  position: relative;
}

.products__view-heading {
  font-size: 3rem;
  padding: 3rem 0;
  text-align: center;
}

.products__view .category {
  display: block;
  position: relative;
  text-align: center;
}

@media (max-width: 768px) {
  .products__view {
    padding: 1rem;
  }

  .products__view-heading {
    font-size: 2.5rem;
    padding: 0;
  }
}
</style>