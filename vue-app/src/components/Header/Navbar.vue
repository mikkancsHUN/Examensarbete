<template>
    <nav class="header__navbar">
        <ul class="header__navbar__list">
            <li class="header__navbar-list-item">Home</li>
            <li class="header__navbar-list-item">Categories</li>
            <li class="header__navbar-list-item">Men's</li>
            <li class="header__navbar-list-item">Women's</li>
            <li class="header__navbar-list-item">About</li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    .header__navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        width: 100%;
        z-index: 99;
    }

    .header__navbar__list {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        text-transform: uppercase;
        font-weight: 500;
    }

    .header__navbar-list-item {
        margin: 0 10px;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.696);
    }
    .header__navbar-list-item:hover {
        color: var(--clr-hover);
    }
    .header__navbar-list-item::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: var(--clr-hover);
        transition: width 0.3s;
    }
    .header__navbar-list-item:hover::after {
        width: 100%;
    }
</style>