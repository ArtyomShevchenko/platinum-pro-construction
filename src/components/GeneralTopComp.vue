<template>
    <section class="general-top">
        <div class="general-top__container general-top__container--bg-dark-filter">
            <div class="general-top__wrapper">
                <div class="general-top__content">
                    <div class="general-top__logo-container">
                        <LogoComp class="general-top__logo" />
                    </div>
                    <h1 class="general-top__title">Platinum ProConstruction</h1>
                    <p class="general-top__text">Committed to construction, dedicated to you.</p>
                    <button class="general-top__button">Contact us</button>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import LogoComp from "./LogoComp.vue"

export default {
    components: { LogoComp }
}
</script>

<style scoped>
.general-top {}

.general-top__container {
    background-image: url("../assets/images/home-top.jpg");
    background-size: cover;
    background-position: center;
}

.general-top__wrapper {}

.general-top__content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.general-top__logo-container {
    padding: 20px;
    border-radius: 50%;
    background-color: var(--color-1);
    aspect-ratio: 1/1;
    display: flex;
    place-items: center;
}

.general-top__logo {
    width: 134px;
    height: 114px;
    cursor: auto;
}

.general-top__logo:hover {
    fill: var(--color-3);
}

.general-top__title {
    color: var(--color-1);
    font-family: "Barlow Condensed";
    font-size: 100px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 6px;
    margin-top: 33px;
}

.general-top__text {
    color: var(--color-1);
    font-family: "Arial";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    margin-top: 21px;
}

.general-top__button {
    margin-top: 54px;
}
</style>