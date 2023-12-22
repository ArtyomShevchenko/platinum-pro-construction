<template>
    <header class="header">
        <div class="header__container">
            <div class="header__wrapper">
                <div class="header__content">
                    <LogoComp class="header__logo" />
                    <BurgerMenuComp class="header__burger" />
                    <NavigationComp class="header__navigation" />
                    <h3 class="header__title">Platinum Pro Moving</h3>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import NavigationComp from '@/components/NavigationComp.vue';
import LogoComp from "@/components/LogoComp.vue"
import BurgerMenuComp from './BurgerMenuComp.vue';

export default {
    components: {
        NavigationComp,
        LogoComp,
        BurgerMenuComp,
    }
}
</script>

<style scoped>
.header {
    color: var(--color-3);
    background-color: var(--color-1);
    font-family: "Arial";
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.38px;

    position: relative;
}

.header__container {
    padding: 0;
}

.header__wrapper {
    padding: 6px 0;
}


.header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.header__title {
    color: var(--color-3);
    font-family: "Arial";
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.38px;
    justify-self: flex-end;
    text-wrap: nowrap;
}

.header__burger {
    display: none;
}

@media (max-width: 1000px) {
    .header__title {
        display: none;
    }

    .header__navigation {
        display: none;
    }

    .header__burger {
        display: block;
    }

    /* .header__container {
        position: absolute;
        z-index: 10;
        width: 100%;
    } */

    .header__logo {
        fill: var(--color-1);
        stroke: var(--color-1);
    }

    .header__wrapper {
        position: relative;
        padding: 6px 0;
        z-index: 99;
    }
}
</style>