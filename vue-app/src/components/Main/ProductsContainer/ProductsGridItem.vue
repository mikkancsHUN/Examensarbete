<template>
  <article class="products__grid-item">
    <img src="@/assets/products-imgs/Saints-Row-Video-Game-3D-All-Over-Print-Zip-Hoodie-Pullover-Hoodie-40d9f5-1.png" alt="">
    <div>
      <h3 class="products__item-title">Saints Hoodie</h3>
      <span class="products__item-description">sweater, men's, women's</span>
      <span class="products__item-price">$69</span>
    </div>
  </article>
</template>

<script>
export default {
    name: 'ProductsGridItem',
}
</script>

<style>
.home__view .products__grid-item {
    background: black;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    height: 327px;
    width: 203px;
    display: grid;
    grid-template-rows: auto 1fr;
}

.home__view .products__grid-item div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    padding-bottom: 0.5rem;
}

.home__view .products__grid-item img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

.home__view .products__item-title {
  color:rgba(255, 255, 255, 0.75);
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
}

.home__view .products__item-description {
  color:rgba(255, 255, 255, 0.75);
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.home__view .products__item-price {
    color:rgba(255, 255, 255, 0.75);
    text-transform: uppercase;
    font-size: 0.9rem;
}

.products__view .products__grid-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
    width: 250px;
    height: 375px;
}
.products__view .products__grid-item:hover {
    box-shadow: 0px 0px 20px 5px rgba(64, 33, 69, 0.5);
}

.products__view .products__item-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

}
.products__view .products__item-title {
    font-size: 18px;
}
.products__view .products__item-price {
    font-size: 20px;
}

@media screen and (max-width: 483px) {
  .home__view .products__grid-item {
      height: 250px;
      width: 150px;
    }
}

@media screen and (max-width: 376px) {
  .home__view .products__grid-item  {
      height: 327px;
      width: 203px;
    }
}
</style>