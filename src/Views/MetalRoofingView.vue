<template>
    <main class="metal-roofing">
        <TitleComp src="../assets/images/metal-roofing/metal-roofing-top.jpg">
            Metal roofing
        </TitleComp>
        <!-- <section class="metal-roofing__container metal-roofing__container--bg-dark-filter">
            <div class="metal-roofing__wrapper">
                <div class="metal-roofing__content">
                    <h1 class="metal-roofing__title">Metal Roofing</h1>
                </div>
            </div>
        </section> -->

        <section class="metal-roofing-discover__container">
            <div class="metal-roofing-discover__wrapper">
                <div class="metal-roofing-discover__content">
                    <h3 class="metal-roofing-discover__title">Discover the Superiority of Metal Roofing:</h3>
                    <p class="metal-roofing-discover__text">
                        Elevate your roofing solution with the durability and elegance of metal roofing. Crafted from
                        high-quality steel, aluminum, copper, or zinc, metal roofing provides an exceptional blend of
                        strength, longevity, and style.</p>
                </div>
            </div>
        </section>

        <section class="metal-roofing-list__container metal-roofing-list__container--bg-light-filter">
            <div class="metal-roofing-list__wrapper">
                <div class="metal-roofing-list__content">
                    <ol class="metal-roofing-list__list">
                        <li class="metal-roofing-list__item" v-for="({ title, text }, index) in metalRoofingList"
                            :key="index">
                            <p class="metal-roofing-list__count">{{ index + 1 }}</p>
                            <h3 class="metal-roofing-list__title">{{ title }}</h3>
                            <p class="metal-roofing-list__text">{{ text }}</p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>

        <section class="metal-roofing-swiper">
            <div class="metal-roofing-swiper__container">
                <div class="metal-roofing-swiper__wrapper">
                    <div class="metal-roofing-swiper__content">
                        <h2 class="metal-roofing-swiper__title">
                            Projects
                        </h2>
                        <swiper class="metal-roofing-swiper__swiper" :modules="modules" :slides-per-view="3"
                            :grid="{ rows: 2, fill: row }" :space-between="30" loop="true" navigation
                            :autoplay="{ delay: 5000, }" :breakpoints="{
                                1024: {
                                    spaceBetween: 23,
                                    grid: { rows: 2, fill: row }
                                },
                                768: {
                                    spaceBetween: 18,
                                    grid: { rows: 2, fill: row }
                                },
                                320: {
                                    spaceBetween: 13,
                                    grid: { rows: 1, fill: row }
                                },
                                0: {
                                    spaceBetween: 0,
                                    grid: { rows: 1, fill: row }

                                },
                            }">
                            <swiper-slide class=" metal-roofing-swiper__slide"
                                v-for="(        item, index        ) in           18         " :key="index">
                                <img class="metal-roofing-swiper__slide-image" :src="getImgUrl(index)"
                                    alt="Metal roof example">
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </section>

        <section class="metal-roofing-contact">
            <div class="metal-roofing-contact__container">
                <div class="metal-roofing-contact__wrapper">
                    <div class="metal-roofing-contact__content">
                        <p class="metal-roofing-contact__title">Elevate Your Roof to New Heights with Metal Roofing!</p>
                        <RouterLink to="/contact" class="button metal-roofing-contact__button">Contact us</RouterLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import TitleComp from "@/components/TitleComp.vue"
import { Navigation, Pagination, Autoplay, A11y, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';


export default {
    components: {
        TitleComp,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Grid, Navigation, Pagination, Autoplay, A11y,],
        };
    },
    data() {
        return {
            metalRoofingList: [
                { title: "Lasting Durability", text: "With a lifespan of 40-70 years or more, metal roofs outshine traditional materials in terms of resilience and longevity." },
                { title: "Weather Resilience", text: "Embrace worry-free protection against rain, snow, hail, and wind. Metal roofs effortlessly shed snow, reducing structural strain." },
                { title: "Efficient Energy Performance", text: "Reflective surfaces curb heat absorption, slashing cooling costs and enhancing energy efficiency." },
                { title: "Minimal Maintenance", text: "Enjoy hassle-free upkeep with metal's resistance to rot, decay, and insect damage. Occasional cleaning and checks keep your roof in prime condition." },
                { title: "Fire Safeguard", text: "Non-combustible metal offers added defense against fires, making it a smart choice, especially in fire-prone areas." },
                { title: "Aesthetic Freedom", text: "Personalize your roof's appearance with a spectrum of colors, styles, and profiles to match your vision and architectural design." },
                { title: "Seamless Installation", text: "Our experts ensure seamless installation, securing metal panels with precision for water-tightness and longevity. Adequate ventilation and insulation prevent warping, maintaining your roof's integrity." },
                { title: "Economical Long-Term Choice", text: "While the initial investment may be higher, the enduring quality of metal roofing, coupled with lowered maintenance and energy expenses, make it a cost-effective, environmentally responsible choice in the long run." },
            ]
        }
    },
    methods: {
        getImgUrl(index) {
            return require(`@/assets/images/metal-roofing/image ${index + 1}.jpg`)
        }
    }
}
</script>

<style >
.metal-roofing-swiper__container {
    padding: 0;
    padding-top: 60px;
}

.metal-roofing-swiper__wrapper {}

.metal-roofing-swiper__title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 75px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 30px;
}

.metal-roofing-swiper__content {}

.metal-roofing-swiper__swiper {}

.metal-roofing-swiper__slide {
    height: 320px;
    width: 428px;
}

.metal-roofing-swiper__slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.metal-roofing-swiper__swiper>>>.swiper-button-prev,
.metal-roofing-swiper__swiper>>>.swiper-button-next {
    color: #27374D;
}















.metal-roofing-discover__container {
    padding: 222px 0;
}

.metal-roofing-discover__wrapper {}

.metal-roofing-discover__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;
}

.metal-roofing-discover__title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.metal-roofing-discover__text {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

@media (max-width: 1024px) {
    .metal-roofing-discover__container {
        padding: 150px 0;
    }

    .metal-roofing-discover__wrapper {}

    .metal-roofing-discover__content {
        padding-inline: 40px;
        text-align: center;
        gap: 30px;
    }

    .metal-roofing-discover__title {
        font-size: 22px;
    }

    .metal-roofing-discover__text {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .metal-roofing-discover__container {
        padding: 75px 0;
    }

    .metal-roofing-discover__wrapper {}

    .metal-roofing-discover__content {
        padding-inline: 35px;
        text-align: center;
        gap: 25px;
    }

    .metal-roofing-discover__title {
        font-size: 17px;
    }

    .metal-roofing-discover__text {
        font-size: 12px;
    }
}

@media (max-width: 425px) {
    .metal-roofing-discover__container {
        padding: 25px 0;
    }

    .metal-roofing-discover__wrapper {}

    .metal-roofing-discover__content {
        padding-inline: 21px;
        text-align: center;
        gap: 20px;
    }

    .metal-roofing-discover__title {
        font-size: 14px;
    }

    .metal-roofing-discover__text {
        font-size: 9px;
    }
}







.metal-roofing-list__container {
    background-image: url("@/assets/images/metal-roofing/metal-roofing-list.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 50px 0;
}

.metal-roofing-list__wrapper {}

.metal-roofing-list__content {}

.metal-roofing-list__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.metal-roofing-list__item {
    display: grid;
    grid-template-columns: minmax(0, 70px) 1fr;
    gap: 10px;
    justify-items: start;
}

.metal-roofing-list__count {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 70px;
    aspect-ratio: 1/1;
    border: 3px solid var(--color-2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.metal-roofing-list__title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    position: relative;
    align-self: end;
}

.metal-roofing-list__title::before {
    content: "";
    display: block;
    width: calc(100% + 40px);
    height: 3px;
    background-color: var(--color-2);
    position: absolute;
    bottom: 0;
    left: -40px;
}

.metal-roofing-list__text {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    grid-column: 2/3;
}

@media(max-width: 1400px) {
    .metal-roofing-list__content {
        padding-inline: 22px;
    }
}

@media(max-width: 768px) {

    .metal-roofing-list__container {
        padding: 25px 0;
    }

    .metal-roofing-list__item {
        display: grid;
        grid-template-columns: minmax(0, 20px) 1fr;
        gap: 0 4px;
        justify-items: start;
    }

    .metal-roofing-list__list {
        gap: 18px;
    }

    .metal-roofing-list__count {
        font-size: 15px;
        width: 20px;
        aspect-ratio: 1/1;
        border: 1px solid var(--color-2);
    }

    .metal-roofing-list__title {
        font-size: 12px;
        font-weight: 700;
        align-self: center;
    }

    .metal-roofing-list__title::before {
        content: "";
        display: none;
    }

    .metal-roofing-list__text {
        font-size: 9px;
    }
}






.metal-roofing-contact {}

.metal-roofing-contact__container {
    padding-top: 60px;
    padding-bottom: 100px;
}

.metal-roofing-contact__wrapper {}

.metal-roofing-contact__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
}

.metal-roofing-contact__title {
    color: var(--color-3);
    font-family: var(--font-1);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.5px;
}

.metal-roofing-contact__button {
    color: var(--color-1);
    font-family: var(--font-1);
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    background: var(--color-2);
}

@media (max-width: 1024px) {
    .metal-roofing-contact__container {
        padding: 50px 0;
    }

    .metal-roofing-contact__title {
        font-size: 20px;
        letter-spacing: 1.3px;
    }

    .metal-roofing-contact__button {
        font-size: 20px;
        padding: 12px 18px;
    }
}

@media (max-width: 768px) {
    .metal-roofing-contact__container {
        padding: 40px 0;
    }

    .metal-roofing-contact__title {
        font-size: 16px;
        letter-spacing: 1px;
    }

    .metal-roofing-contact__button {
        font-size: 16px;
        padding: 9px 15px;
    }
}

@media (max-width: 425px) {
    .metal-roofing-contact__container {
        padding: 30px 0;
    }

    .metal-roofing-contact__title {
        font-size: 9px;
        letter-spacing: 0.54px;
    }

    .metal-roofing-contact__button {
        font-size: 9px;
        padding: 6px 12px;
    }
}
</style>