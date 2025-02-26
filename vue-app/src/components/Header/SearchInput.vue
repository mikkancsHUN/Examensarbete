<template>
    <header class="header__search-input">
        <a href="#">Planet Saints</a>
        <form action="">
            <input type="text" placeholder="Search for product or categories..." />
            <span class="material-symbols-outlined search-icon">search</span>
        </form>
        <section class="header__search-input-icons">
            <a href="">
                <span class="material-symbols-outlined">person</span>
            </a>
            <a href="">
                <span class="material-symbols-outlined">favorite</span>
            </a>
            <a href="">
                <span class="material-symbols-outlined">shopping_bag</span>
            </a>
        </section>
    </header>
</template>

<script>

export default {

}
</script>

<style>
    .header__search-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        width: 100%;
        background-color: #ffffff;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
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
        background-color: #f4f4f4;
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
    }
    .search-icon:hover {
        color: var(--clr-hover);
        box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.2);
        
    }
</style>