<template>
    <header class="header__top wrapper">
        <section class="header__top-social">
            <a href="#"><img src="../../assets/icons/facebook.png" alt=""></a>
            <a href="#"><img src="../../assets/icons/instagram.png" alt=""></a>
            <a href="#"><img class="twitter" src="../../assets/icons/X_icon_2.svg.png" alt=""></a>
        </section>
        <section class="header__top-buttons">
            <button class="animated-btn">Login</button>
            <button class="animated-btn">Sign Up</button>
        </section>
    </header>
</template>

<script>
export default {
    name: 'HeaderTop',
}
</script>

<style>
    .header__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        width: 100%;
    }

    .header__top-buttons {
        display: flex;
        gap: 10px;
    }

    .theme-btn {
        background-color: black;
        color: var(--clr-primary);
        padding: 0.5em 1em;
        border-radius: 5px;
        transition: 0.2s;
        border: none;
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
    
    .twitter {
        width: 30px;
    }

    @media screen and (max-width: 1470px) {
        .header__top-social {
        padding-left: 3rem;
        }
    }

    @media screen and (max-width: 395px) {
        .header__top-buttons button {
            font-size: 12px;
            margin: 0;
            padding: 12px;
        }
    }
</style>