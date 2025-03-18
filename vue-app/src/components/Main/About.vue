<template>
  <article class="about">
    <h2>About us</h2>
    <div class="about__content wrapper">
      <p>The <span>Third Street Saints</span> are more than just a crew – they’re a way of life. At Planet Saints, you’ll find everything a true Saint needs, from iconic apparel to exclusive accessories. Our stores in <span>Stilwater</span>, <span>Steelport</span>, and <span>Santo Ileso</span> are ready to welcome every new Saint looking to join the ranks.
      Suit up, represent the Saints, and show the world who’s in charge!
    </p>
    <button class="animated-btn">Join us</button>
    </div>
  </article>
</template>

<script>
export default {

}
</script>

<style>
  .about {
    height: 600px;
    width: 100%;
    background: url('@/assets/wallpaperflare.com_wallpaper9.jpg') no-repeat center center;
    background-size: contain;
    background-color: black;
    box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .about h2 {
    font-size: 3rem;
    margin: 0 0 1rem 0;
    width: 100%;
    text-align: center;
    padding-top: 2rem;
    color: var(--clr-primary);
  }

  .about__content {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    padding-right: 1rem;
  }

  .about p {
    font-size: 1.1rem;
    color: var(--clr-secondary);
    width: 50%;
  }

  .about span {
    font-weight: bold;
    color: var(--clr-hover);
  }

  .about button {
    font-size: 1.4rem;
    background-color: black;
    color: var(--clr-primary);
  }

  @media screen and (max-width: 1451px) {
    .about__content {
      justify-content: center;
      gap: 2rem;
    }
  }


  @media screen and (max-width: 1100px) {
    .about {
      height: 400px;
      box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.5);
    }

    .about__content {
      flex-direction: column;
      padding: 0 1rem;
    }

    .about p {
      width: 100%;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    .about {
      height: fit-content;

    }

    .about h2 {
      font-size: 2rem;
    }

    .about p {
      font-size: 0.8rem;
    }

    .about button {
      font-size: 1rem;
    }
  }
</style>