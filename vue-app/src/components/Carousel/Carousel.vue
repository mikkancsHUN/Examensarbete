<template>
  <section class="carousel__section wrapper">
  <section class="carousel">
    <div class="carousel__container">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel__slide"
      >
        <img :src="image" alt="Carousel Image" />
      </div>
    </div>
    <div class="carousel__text">Planet Saints</div>
  </section>
  </section>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      images: [
        'src/assets/products-imgs/SaintsFlowWallpaper.png',
        'src/assets/products-imgs/5wwvfjozycc91.jpg',
        'src/assets/products-imgs/6470745613_3660e26c19_b.jpg'
      ],
      currentIndex: 0,
      interval: null
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 3000);
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    }
  }
};
</script>

<style>
.carousel__section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.carousel {
  position: relative;
  width: 800px;
  height: 300px;
  overflow: hidden;
  margin: 20px auto;
  border-radius: 10px;
  background-color: #000000;
  transition: background-color 1s ease;
}

.carousel__container {
  display: flex;
  animation: slideAnimation 30s infinite;
}

.carousel__slide {
  min-width: 100%;
  height: 100%;
}

.carousel__slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.carousel__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1, 0.7);
  z-index: 10;
  pointer-events: none;
  animation: textAnimation 30s infinite;

  font-family: 'Poppins', sans-serif;
  transform: translate(-50%, -50%) scale(1, 0.7);
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: 0.2s;
  text-decoration: none;
  color: var(--clr-main-heading);
}

.carousel__text::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: white;
    transform: scale(0, 1);
    animation: textAfterAnimation 30s infinite;
}

@media screen and (max-width: 745px) {
  .carousel__text {
    white-space: nowrap;
  }
  .carousel {
    height: 300px;
    transform: scale(0.9);
    margin: -3rem 0;
  }
  .carousel__slide {
    height: 300px;
  }
  .carousel__slide img {
    object-fit: cover;
  }
}
@media screen and (max-width: 575px) {
  .carousel__text {
    white-space: nowrap;
  }
  .carousel {
    height: 200px;
    transform: scale(0.9);
    margin: -3rem 0;
  }
  .carousel__slide {
    height: 200px;
  }
  .carousel__slide img {
    object-fit: cover;
  }
}


@keyframes slideAnimation {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(0);
    opacity: 1;
  }
  35% {
    transform: translateX(-100%);
    opacity: 1;
  }
  60% {
    transform: translateX(-100%);
    opacity: 1;
  }
  65% {
    transform: translateX(-200%);
    opacity: 1;
  }
  70% {
    transform: translateX(-200%);
    opacity: 1;
  }
  80% {
    transform: translateX(-200%);
    opacity: 1;
  }
  90% {
    transform: translateX(-200%);
    opacity: 0;
  }
  100% {
    transform: translateX(-200%);
    opacity: 0;
  }
}

@keyframes textAnimation {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
    font-size: 1.5rem;
  }
  87% {
    opacity: 1;
    text-shadow: 0px 0px 0px black;
  }
  93% {
    opacity: 1;
    font-size: 2.5rem;
    text-shadow: 0px 0px 20px var(--clr-heading-hover);
  }
  100% {
    opacity: 1;
    font-size: 2.5rem;
    text-shadow: 0px 0px 20px var(--clr-heading-hover);
  }
}

@keyframes textAfterAnimation {
  0% {
    transform: scale(0, 1);
  }
  85% {
    transform: scale(0, 1);
    box-shadow: 0px 0px 0px black;
  }
  90% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}

</style>
