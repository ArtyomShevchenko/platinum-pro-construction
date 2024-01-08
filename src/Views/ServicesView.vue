<template>
    <main class="services">
        <TitleComp src="assets/images/services-top.jpg">
            Our Services
        </TitleComp>
        <section class="services__container">
            <!-- <div class="services__title-container services__title-container--bg-dark-filter">
                <div class="services__wrapper">
                    <h1 class="services__title">Our Services</h1>
                </div>
            </div> -->

            <div class="servces__wrapper">
                <div class="services__cards-container">
                    <article class="services__card">
                        <img class="services__card-img" src="@/assets/images/services-card-1.jpg" alt="Services Image">
                        <h2 class="services__card-title">Metal roofing</h2>
                        <p class="services__card-text">Elevate your roofing solution with the durability and elegance of
                            metal roofing. Crafted from high-quality steel, aluminum, copper, or zinc, metal roofing
                            provides an exceptional blend of strength, longevity, and style.</p>
                        <RouterLink to="metal-roofing" class="services__card-link">Learn more</RouterLink>
                    </article>
                    <article class="services__card">
                        <img class="services__card-img" src="@/assets/images/services-card-2.jpg" alt="Services Image">
                        <h2 class="services__card-title">Painting / Drywals</h2>
                        <p class="services__card-text">We specialize in revitalizing interiors through top-notch
                            painting and drywall solutions. Our skilled team brings life to your spaces, creating a
                            harmonious blend of aesthetics and functionality.</p>
                        <RouterLink to="painting-drywals" class="services__card-link">Learn more</RouterLink>
                    </article>
                    <article class="services__card">
                        <img class="services__card-img" src="@/assets/images/services-card-3.jpg" alt="Services Image">
                        <h2 class="services__card-title">Windows / Doors</h2>
                        <p class="services__card-text">Platinum Pro Construction is your partner in enhancing the
                            beauty, functionality, and energy efficiency of your space through our top-tier windows and
                            doors installation services.</p>
                        <RouterLink to="windows-doors" class="services__card-link">Learn more</RouterLink>
                    </article>
                    <article class="services__card">
                        <img class="services__card-img" src="@/assets/images/services-card-4.jpg" alt="Services Image">
                        <h2 class="services__card-title">Landscaping</h2>
                        <p class="services__card-text">We will help you to turn outdoor dreams into reality. We
                            specialize in transforming ordinary landscapes into breathtaking havens that reflect your
                            vision and harmonize with nature.</p>
                        <RouterLink to="landscaping" class="services__card-link">Learn more</RouterLink>
                    </article>
                    <article class="services__card">
                        <img class="services__card-img" src="@/assets/images/services-card-5.jpg" alt="Services Image">
                        <h2 class="services__card-title">Flooring</h2>
                        <p class="services__card-text">Discover a range of high-quality flooring options that blend
                            style and durability seamlessly. From classic hardwood to modern tiles, our expert
                            installation transforms your space with elegance.</p>
                        <RouterLink to="flooring" class="services__card-link">Learn more</RouterLink>
                    </article>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import TitleComp from "@/components/TitleComp.vue"

export default {
    components: {
        TitleComp
    }
}
</script>

<style scoped>
.services {}

/* .services__container {
    padding: 0;
} */

/* .services__title-container {
    background-image: url("../assets/images/services-top.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 614px;
    display: flex;
    align-items: center;
} */

.services__wrapper {}

.services__title {}

.services__cards-container {
    padding: 65px 0 100px 0;
    display: flex;
    flex-direction: column;
    gap: 65px;
}

.services__card {
    background: var(--color-2);
    color: var(--color-1);
    border-radius: 38px;
    border: 2px solid var(--color-2);
    padding: 45px 70px;

    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-rows: minmax(0, 70px) 1fr;
    gap: 20px 40px;
}

.services__card:nth-child(2n) {
    background: var(--color-1);
    color: var(--color-2);
}

.services__card-img {
    max-width: 630px;
    max-height: 420px;
    height: 100%;
    width: 100%;
    border-radius: 38px;
    object-fit: cover;

    grid-row: span 3;
}

.services__card-title {
    color: inherit;
    font-family: "Arial";
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: start;
    text-wrap: nowrap;
}

.services__card-text {
    color: inherit;
    font-family: "Arial";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: start;
    align-self: start;
}

.services__card-link {
    text-align: end;
    align-self: end;
    justify-self: end;
    padding: 4px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;
}

.services__card-link::after {
    content: "";
    display: block;
    height: 1px;
    width: 40px;
    background-color: var(--color-1);
}

.services__card-link::before {
    content: "";
    display: block;
    height: 8px;
    width: 8px;
    background-color: transparent;
    border: 1px solid var(--color-1);
    border-radius: 1px;
    border-color: var(--color-1) var(--color-1) transparent transparent;
    transform-origin: center;
    transform: rotate(45deg) translateY(-40%);
    position: absolute;
    top: 40%;
    right: 8px;
}

.services__card:nth-child(2n) .services__card-link::before {
    content: "";
    display: block;
    height: 8px;
    width: 8px;
    background-color: transparent;
    border: 1px solid var(--color-2);
    border-radius: 1px;
    border-color: var(--color-2) var(--color-2) transparent transparent;
    transform-origin: center;
    transform: rotate(45deg) translateY(-40%);
    position: absolute;
    top: 40%;
    right: 8px;
}

.services__card:nth-child(2n) .services__card-link::after {
    content: "";
    display: block;
    height: 1px;
    width: 40px;
    background-color: var(--color-2);
}

@media (max-width: 1200px) {

    .services__title-container {
        min-height: 514px;
    }

    .services__cards-container {
        padding: 55px 0 80px 0;
        gap: 55px;
    }

    .services__card {
        padding: 40px;
    }

    .services__card-title {
        font-size: 50px;
    }

    .services__card-text {
        font-size: 20px;
    }
}

@media (max-width: 1000px) {

    .services__title-container {
        min-height: 414px;
    }

    .services__cards-container {
        padding: 45px 0 60px 0;
        gap: 45px;
    }

    .services__card {
        padding: 34px 30px 44px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        border-radius: 30px;
    }

    .services__card-img {
        max-width: 100%;
        max-height: 300px;
        height: 100%;
        width: 100%;
        border-radius: 23px;
        object-fit: cover;
    }

    .services__card-title {
        font-size: 25px;
        text-align: center;
        margin-top: 15px;
    }

    .services__card-text {
        font-size: 16px;
        margin-top: 10px;
    }

    .services__card-link {
        font-size: 14px;
        text-align: center;
        margin-top: 20px;
    }

    .services__card-link::before,
    .services__card-link::after {
        content: "";
        display: none;
    }
}

@media (max-width: 425px) {
    .services__title {
        font-size: 34px;
    }

    .services__title-container {
        min-height: 314px;
    }

    .services__cards-container {
        padding: 24px 0 30px 0;
        gap: 24px;
    }

    .services__card {
        padding: 24px 20px 34px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        border-radius: 24px;
    }

    .services__card-img {
        max-width: 100%;
        max-height: 50%;
        height: 100%;
        width: 100%;
        border-radius: 23px;
        object-fit: cover;
    }

    .services__card-title {
        font-size: 20px;
        text-align: center;
        margin-top: 13px;
    }

    .services__card-text {
        font-size: 11px;
        text-align: center;
        margin-top: 5px;
    }

    .services__card-link {
        font-size: 9px;
        text-align: center;
        margin-top: 15px;
    }

    .services__card-link::before,
    .services__card-link::after {
        content: "";
        display: none;
    }
}
</style>