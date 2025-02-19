<template>
    <header class="header__top">
        <section class="header__top-social">
            <a href="#"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-facebook"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                  ></path>
                </svg>
            </a>
            <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-instagram"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                </svg>
            </a>
        </section>
        <section>
            <button>c</button>
            <button>c</button>
        </section>
    </header>
</template>

<script>
export default {

}
</script>

<style>
    .header__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(232, 232, 232);
        padding: 20px;
        width: 100%;
    }
    .header__top-social {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }
    .header__top-social a {
        transition: transform 0.2s;
    }
    .header__top-social a:hover {
        transform: scale(1.2);
    }
</style>