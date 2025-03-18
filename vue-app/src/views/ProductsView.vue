<template>
    <Header style="background-color: rgba(0, 0, 0, 0.5); "/>
        <section class="products__view">
        <h2 class="products__view-heading">Products</h2>
        <Category style="margin: auto;"/>
        <ProductsViewGrid class="wrapper" style="margin: auto;"/>
    </section>
</template>

<script>
import Header from '../components/Header/Header.vue'
import SearchInput from '../components/Header/SearchInput.vue'
import Category from '../components/Main/ProductsContainer/Category.vue'
import ProductsViewGrid from '../components/ProductsView/ProductsViewGrid.vue';
export default {
    name: 'ProductsView',
    components: {
        Header,
        SearchInput,
        Category,
        ProductsViewGrid
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
    padding: 0 1rem;
    z-index: 1;
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

.products__view .filter {
    margin-top: 2em;
    transform: scale(1, 0.9);
}
.products__view .filter-btn {
    background-color: black;
    padding: 18px 20px;
    font-size: 14px;
    color: var(--clr-secondary);
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    border-top: 2px solid rgb(61, 53, 62);
    border-bottom: 2px solid rgb(61, 53, 62);
    border-left: none;
    border-right: none;
    user-select: none;
}
.products__view .filter-btn:hover {
    color: rgb(255, 255, 255);
    text-shadow: 0px 5px 10px rgb(19, 13, 19);
    border: 2px solid var(--clr-hover);
    border-left: none;
    border-right: none;
    transition: 0.4s;
}
.products__view .filter-btn:active {
    background-color: gray;
    border: 2px solid gold;
    border-left: none;
    border-right: none;
    transition: 0s;
}
.products__view .filter-btn:first-child {
    border-radius: 5px 0px 0px 5px;
}
.products__view .filter-btn:last-child {
    border-radius: 0px 5px 5px 0px;
}

.products__view .filter label input {
    display: none;
}
</style>