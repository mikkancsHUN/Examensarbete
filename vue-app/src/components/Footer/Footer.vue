<template>
    <footer class="footer">
        <section class="footer__info wrapper">
            <h1>Planet Saints</h1>
            <ul>
                <h4>Locations</h4>
                <li><span class="material-symbols-outlined">
                    location_on
                    </span>Stilwater
                </li>
                <li><span class="material-symbols-outlined">
                    location_on
                    </span>Steelport
                </li>
                <li><span class="material-symbols-outlined">
                    location_on
                    </span>Santo Ileso
                </li>
            </ul>
            <span class="footer__info-email">planetsaints@gmail.com</span>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    components: {
        
    }
}
</script>

<style>
.footer {
    width: 100%;
    height: 400px;
    padding: 20px;
    z-index: 1;
    position: relative;
    background-color: black;
    /*box-shadow: inset 0px -10px 10px 0px rgba(73, 50, 112, 0.38);*/
}
.footer__info {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
}

.footer__info h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2em;
    transform: scale(1, 0.7);
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px var(--clr-heading-hover);
    text-decoration: none;
    color: var(--clr-main-heading);
    user-select: none;
}

.footer__info h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4em;
    transform: scale(1, 0.8);
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--clr-heading);
}

.footer__info ul {
    list-style: none;
}

.footer__info ul li {
    display: flex;
    align-items: flex-end;
    font-weight: 600;
    transform: translateX(-8px);
    color: var(--clr-secondary);
    margin-top: 2px;
}

.footer__info .material-symbols-outlined {
    color: var(--clr-hover);
    transform: translateY(4px);
}

.footer__info-email {
    font-weight: 200;
}

@media screen and (max-width: 1100px) {
    .footer__info {
    justify-content: space-between;
    flex-direction: column-reverse;
}
.footer__info {
    padding-top: 4rem;
}
}
</style>