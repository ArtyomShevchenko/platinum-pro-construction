<template>
    <section class="swiper">
        <div class="swiper__container">
            <div class="swiper__wrapper">
                <div class="swiper__content">
                    <h2 class="swiper__title">
                        Projects
                    </h2>
                    <swiper class="swiper__swiper" :modules="modules" :slides-per-view="3" :grid="{ rows: 2, fill: row }"
                        :space-between="30" :loop="true" navigation :autoplay="{ delay: 5000, }" :breakpoints="{
                            1024: {
                                spaceBetween: 23,
                                grid: { rows: 2, fill: row },
                            },
                            768: {
                                spaceBetween: 18,
                                grid: { rows: 2, fill: row },
                            },
                            320: {
                                spaceBetween: 13,
                                grid: { rows: 1, fill: row },
                                slidesPerView: 3,
                            },
                            0: {
                                spaceBetween: 0,
                                grid: { rows: 1, fill: row },
                                slidesPerView: 1,
                            },
                        }">
                        <swiper-slide class=" swiper__slide" v-for="( item, index ) in Number(numberSlides)" :key="index">
                            <img class="swiper__slide-image" :src="getImgUrl(index)" alt="Metal roof example">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Navigation, Pagination, Autoplay, A11y, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';


export default {
    props: {
        folderPath: String,
        numberSlides: {
            type: Number,
            default: 0
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Grid, Navigation, Pagination, Autoplay, A11y,],
        };
    },
    methods: {
        getImgUrl(index) {
            return require(`@/${this.folderPath}/image ${index + 1}.jpg`)
        }
    },
}
</script>

<style scoped>
.swiper__container {
    padding: 0;
    padding-top: 3.75rem;
}

.swiper__wrapper {}

.swiper__title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 4.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 1.875rem;
}

.swiper__content {}

.swiper__swiper {}

.swiper__slide {
    height: 20rem;
    width: 26.75rem;
}

.swiper__slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper__swiper>>>.swiper-button-prev,
.swiper__swiper>>>.swiper-button-next {
    color: #27374D;
    color: red;
}
</style>