<template>
    <header class="header__top">
        <section class="header__top-social">
            <a href="#"><img src="../../assets/icons/facebook.png" alt=""></a>
            <a href="#"><img src="../../assets/icons/instagram.png" alt=""></a>
            <a href="#"><img src="../../assets/icons/twitter.png" alt=""></a>
        </section>
        <section>
            <button>Login</button>
            <button>Sign Up</button>
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
        padding: 10px 20px;
        width: 100%;
    }
    .header__top-social {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        padding-top: 5px;
    }
    .header__top-social a {
        transition: transform 0.2s;
    }
    .header__top-social a:hover {
        transform: scale(1.2);
    }
</style>