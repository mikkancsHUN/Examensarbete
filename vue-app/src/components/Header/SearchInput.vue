<template>
    <header class="header__search-input wrapper">
        <a class="main__heading" href="/">Planet Saints</a>
        <form action="">
            <input type="text" placeholder="Search for product or categories..." />
            <span class="material-symbols-outlined search-icon">search</span>
        </form>
        <section class="header__search-input-icons">
            <a href="">
                <span class="material-symbols-outlined">person</span>
            </a>
            <a href="/favorites">
                <span class="material-symbols-outlined">favorite</span>
            </a>
            <a href="/cart">
                <span class="material-symbols-outlined">shopping_bag</span>
            </a>
        </section>
    </header>
</template>

<script>

export default {
    name: 'SearchInput'
}
</script>

<style>
    .main__heading {
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-size: 2.6em;
        transform: scale(1, 0.7);
        font-weight: 500;
        letter-spacing: 3px;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px var(--clr-heading-hover);
        transition: 0.2s;
        text-decoration: none;
        color: var(--clr-main-heading);
    }
    .main__heading:hover {
        text-shadow: 0px 5px 10px var(--clr-heading-hover);
    }
    .main__heading::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: var(--clr-heading-hover);
        transform: scale(0, 1);
        transition: transform ease-in-out 250ms;
    }
    .main__heading:hover::after{
        transform: scale(1, 1);
        box-shadow: 0px 0px 10px var(--clr-heading-hover);
    }

    .header__search-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        width: 100%;
    }

    .header__search-input form {
        position: relative;
        display: flex;
        align-items: center;
        width: 50%;
    }
    .header__search-input input {
        padding: 10px;
        border-radius: 5px;
        border: none;
        width: 100%;
        background-color: #2c2637db;
        transition: 0.2s;
        outline: none;
        color: var(--clr-primary);
    }
    .header__search-input input:hover {
        box-shadow: 0px 0px 500px 1px var(--clr-heading-hover); 
        background: rgba(20, 10, 28, 0.75);
    }
    .header__search-input input:focus {
        box-shadow: 0px 0px 50px 1px var(--clr-heading-hover);
        background: rgba(30, 18, 41, 0.75);
    }

    .header__search-input-icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }
    
    .search-icon {
        position: absolute;
        right: 10px;
        color: var(--clr-icon);
        cursor: pointer;
        user-select: none;
        padding: 8px;
    }
    .search-icon:hover {
        color: var(--clr-hover);
        box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.2);
    }
    .search-icon:active {
        transform: scale(0.9);
        box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.8);
        transition: 0.1s;
    }

    @media screen and (max-width: 1191px) {
        .header__search-input {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .header__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .main__heading {
        order: 0;
        margin-right: auto;
    }

    .header__search-input-icons {
        order: 0;
        margin-left: auto;
    }

    .header__search-input form {
        width: 100%;
        justify-content: center;
    }
    }
</style>