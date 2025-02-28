<template>
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

    <button @click="prevSlide" class="carousel__button prev">‹</button>
    <button @click="nextSlide" class="carousel__button next">›</button>
  </section>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      images: [
        'src/assets/products-imgs/SaintsFlowWallpaper.png',
        'src/assets/products-imgs/5wwvfjozycc91.webp',
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
.carousel {
  position: relative;
  width: 800px;
  height: 300px;
  overflow: hidden;  /* Csak a látható képet engedi megjeleníteni */
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 1px 10px rgba(255, 255, 255, 0.1);
  background-color: #000000; /* Kezdő háttérszín */
  transition: background-color 1s ease; /* Sötétedés animáció */
}

.carousel__container {
  display: flex; /* A képeket egymás mellé rendezzük */
  animation: slideAnimation 30s infinite; /* Animáció hozzáadása */
}

.carousel__slide {
  min-width: 100%; /* Minden kép 100%-os szélességgel rendelkezik */
  height: 100%;
}

.carousel__slide img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Képek teljes méretben jelennek meg */
}

.carousel__button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.503);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}
.prev {
  left: 0px;
  border-radius: 0 5px 5px 0;
}

.next {
  right: 0px;
  border-radius: 5px 0 0 5px;
}

.carousel__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1, 0.7);
  font-weight: 500;
  letter-spacing: 3px;
  transition: 0.2s;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  transition: opacity 1s ease;
  z-index: 10;
  pointer-events: none;
  animation: textAnimation 30s infinite; /* Szöveg animáció */
}

.carousel__text::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: white;
    box-shadow: 0px 0px 20px rgb(208, 164, 255);
    transform: scale(0, 1);
    animation: textAfterAnimation 30s infinite; /* Szöveg animáció */
}

/* Keyframes animáció módosítása */
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
    opacity: 1; /* Kezd sötétedni */
  }
  90% {
    transform: translateX(-200%);
    opacity: 0; /* Kezd sötétedni */
  }
  100% {
    transform: translateX(-200%); /* Visszatérés az első képre */
    opacity: 0; /* Teljesen elsötétül */
  }
}

@keyframes textAnimation {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
    font-size: 2rem;
  }
  87% {
    opacity: 1;
    text-shadow: 0px 0px 20px rgb(208, 164, 255);
  }
  93% {
    opacity: 1;
    font-size: 3rem;
    text-shadow: 0px 0px 200px rgb(208, 164, 255);
  }
  100% {
    opacity: 1;
    font-size: 3rem;
  }
}

@keyframes textAfterAnimation {
  0% {
    transform: scale(0, 1);
  }
  85% {
    transform: scale(0, 1);
  }
  90% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}

</style>
