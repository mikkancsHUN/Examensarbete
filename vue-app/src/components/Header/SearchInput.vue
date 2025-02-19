<template>
    <header class="header__search-input">
        <a href="#">Planet Saints</a>
        <input type="text" placeholder="Search for product or categories..." />
        <section>
            <button>a</button>
            <button>b</button>
            <button>c</button>
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
        background-color: rgb(233, 233, 233);
        padding: 20px;
        width: 100%;
    }
    .header__search-input input {
        padding: 10px;
        border-radius: 5px;
        border: none;
        width: 50%;
    }
</style>