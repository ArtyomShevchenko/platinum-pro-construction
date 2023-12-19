<template>
    <header class="header">
        <div class="header__container">
            <div class="header__wrapper">
                <div class="header__content">
                    <LogoComp />
                    <NavigationComp />
                    <h3 class="header__title">Platinum Pro Moving</h3>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import NavigationComp from '@/components/NavigationComp.vue';
import LogoComp from "@/components/LogoComp.vue"

export default {
    components: {
        NavigationComp,
        LogoComp
    }
}
</script>

<style scoped>
.header {
    color: var(--color-3);
    font-family: "Arial";
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.38px;
}

.header__wrapper {}

.header__container {
    padding: 6px 0;
}

.header__content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
}

.header__title {
    color: var(--color-3);
    font-family: "Arial";
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.38px;
}
</style>