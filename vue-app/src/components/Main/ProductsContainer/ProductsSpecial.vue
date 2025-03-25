<template>
    <section class="products__special">
        <h2>Special sale</h2>
        <div>
            <img src="@/assets/products-imgs/5wwvfjozycc91.webp" alt="">
        <article class="products__special-item">
            <h3>Saints Boot</h3>
            <p>Calling all Saints to the fashion forefront! Step into our reality, where style reigns supreme and ordinary is left in the dust.</p>
            <span>$279 <del>$379</del></span>
            <button class="animated-btn">Purchase</button>
        </article>
    </div>
    </section>
</template>

<script>
export default {
    name: 'ProductsSpecial'
}
</script>

<style>
.products__special {
    height: 100%;
    width: 100%;
    padding: 2rem;
}

.products__special h2 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 1px solid var(--clr-light);
}

.products__special div {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2rem;
}

.products__special img {
    width: 500px;
}

.products__special article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--clr-secondary);
}

.products__special h3 {
    color:rgba(255, 255, 255, 0.75);
    font-family: 'Syne', sans-serif;
    text-transform: uppercase;
    font-size: 1.6rem;
}

.products__special span {
    color:rgba(255, 255, 255, 0.75);
    text-transform: uppercase;
    font-size: 2rem;
}

.products__special del {
    color: var(--clr-light);
    font-size: 1.5rem;
    margin-left: 0.5rem;
}

.products__special-item button {
    background: black;
    border-radius: 0.25rem;
    color: var(--clr-secondary);
    cursor: pointer;
    font-size: 1.1rem;
    text-transform: uppercase;
    transition: var(--transition);
    width: 150px;
}

@media screen and (max-width: 884px) {
    .products__special {
        padding: 1rem;
    }

    .products__special-item button {
        width: 50%;
    }

    .products__special div {
        flex-direction: column;
        gap: 2rem;
    }

    .products__special img {
        width: 100%;
    }

    .products__special article {
        align-items: center;
        text-align: center;
    }

    .products__special h3 {
        font-size: 1.5rem;
    }

    .products__special span {
        font-size: 1.5rem;
    }

    .products__special del {
        font-size: 1.2rem;
    }
}

</style>