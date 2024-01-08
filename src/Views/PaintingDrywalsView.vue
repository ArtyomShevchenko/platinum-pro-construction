<template>
    <main class="painting-drywals">
        <!-- <TitleComp src="assets/images/metal-roofing/metal-roofing-top.jpg"> -->
        <TitleComp>
            Painting and drywalls
        </TitleComp>

        <DiscoverComp>
            <h3>Transforming Spaces with Expert Painting and Drywall Services:</h3>
            <p>Welcome to Platinum Pro Construction, where we specialize in revitalizing interiors through
                top-notch painting and drywall solutions. Our skilled team brings life to your spaces, creating a
                harmonious blend of aesthetics and functionality.
            </p>
        </DiscoverComp>

        <MainInfo :data="mainInfoData" src="assets/images/about-cards.jpg"></MainInfo>

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

        <ContacInfoComp />
    </main>
</template>

<script>
import { Navigation, Pagination, Autoplay, A11y, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

import TitleComp from "@/components/TitleComp.vue";
import DiscoverComp from "@/components/DiscoverComp.vue";
import MainInfo from '@/components/MainInfoComp.vue';
import ContacInfoComp from '@/components/ContacInfoComp.vue';

export default {
    components: {
        TitleComp,
        Swiper,
        SwiperSlide,

        DiscoverComp,
        MainInfo,
        ContacInfoComp,
    },
    setup() {
        return {
            modules: [Grid, Navigation, Pagination, Autoplay, A11y,],
        };
    },
    data() {
        return {
            mainInfoData: [
                {
                    title: "Painting Services",
                    cards: [
                        { title: "Elevate Ambiance", text: "Our painting experts understand the power of color. Whether you seek serene neutrals, vibrant accents, or a unique palette, we'll help you achieve the perfect atmosphere." },
                        { title: "Precision Application", text: "Using premium paints and cutting-edge techniques, we ensure smooth and flawless application for a professional finish that stands the test of time." },
                        { title: "Customized Design", text: "Our team collaborates closely with you to bring your vision to life. From color selection to texture implementation, we create a space that resonates with your style." },
                        { title: "Residential and Commercial", text: "Whether revamping your home or enhancing your business environment, our painting services cater to residential and commercial needs." },
                    ]
                },
                {
                    title: "Drywall Solutions",
                    cards: [
                        { title: "Seamless Installation", text: "Our drywall experts craft a clean canvas for your interiors. With meticulous installation, we create even surfaces ready for the transformative touch of paint." },
                        { title: "Repair and Restoration", text: "From minor dents to extensive damage, we have the expertise to restore your walls to their original condition. Our team ensures a seamless blend, making repairs virtually invisible." },
                        { title: "Soundproofing and Insulation", text: "Beyond aesthetics, our drywall services offer functional benefits. Enhance privacy and energy efficiency through our specialized soundproofing and insulation solutions." },
                        { title: "Timely Project Completion", text: "We understand the importance of timelines. Our efficient approach ensures your painting and drywall projects are completed within schedule, minimizing disruption." },
                    ]
                },
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













/* 

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
} */
</style>