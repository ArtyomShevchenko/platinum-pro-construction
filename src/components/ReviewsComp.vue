<template>
    <section class="reviews">
        <div class="reviews__container reviews__container--bg-light-filter">
            <div class="reviews__wrapper">
                <div class="reviews__content">
                    <h2 class="reviews__title">Reviews</h2>

                    <swiper :effect="'coverflow'" :slidesPerView="2" :pagination="{
                        clickable: true,
                    }" :modules="modules" loop="true" class="reviews__swiper-body">
                        <swiper-slide class="reviews__swiper-card">
                            <p class="reviews__card-text">I recently had the pleasure of working with Platinum Pro
                                Construction guys on a home renovation project, and I couldn't be more impressed with
                                their services. From start to finish, they demonstrated top-notch workmanship and
                                professionalism that exceeded my expectations.
                            </p>
                        </swiper-slide>
                        <swiper-slide class="reviews__swiper-card">
                            <p class="reviews__card-text">I hired Platinum Pro Construction for a home renovation
                                project, and I'm thrilled with the results. Their team was professional, efficient, and
                                their workmanship was top-notch. The project was completed on time and within budget. I
                                highly recommend this company for any construction needs. They exceeded my expectations!
                            </p>
                        </swiper-slide>
                        <swiper-slide class="reviews__swiper-card">
                            <p class="reviews__card-text">
                                I had the pleasure of working with Platinum Pro on a small renovation project, and I'm
                                blown away by their craftsmanship. The attention to detail and commitment to quality
                                were evident in every aspect of the project.
                            </p>
                        </swiper-slide>
                        <swiper-slide class="reviews__swiper-card">
                            <p class="reviews__card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto iure, explicabo
                                odit accusantium tenetur blanditiis corporis sint, perferendis natus tempora facere
                                fugit. Sed error minima explicabo quisquam laborum quibusdam odit!
                                Asperiores blanditiis adipisci voluptatum soluta quo aspernatur vero vitae, facere
                                eligendi doloribus dicta qui neque ipsa.
                            </p>
                        </swiper-slide>
                        <swiper-slide class="reviews__swiper-card">
                            <p class="reviews__card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto iure, explicabo
                                odit accusantium tenetur blanditiis corporis sint, perferendis natus tempora facere
                                fugit. Sed error minima explicabo quisquam laborum quibusdam odit!
                                Asperiores blanditiis adipisci voluptatum soluta quo aspernatur vero vitae, facere
                                eligendi doloribus dicta qui neque ipsa.
                            </p>
                        </swiper-slide>
                        <swiper-slide class="reviews__swiper-card">
                            <p class="reviews__card-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto iure, explicabo
                                odit accusantium tenetur blanditiis corporis sint, perferendis natus tempora facere
                                fugit. Sed error minima explicabo quisquam laborum quibusdam odit!
                                Asperiores blanditiis adipisci voluptatum soluta quo aspernatur vero vitae, facere
                                eligendi doloribus dicta qui neque ipsa.
                            </p>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
};
</script>

<style>
.reviews {}

.reviews__container {
    background-image: url("../assets/images/home-reviews.jpg");
    background-size: cover;
    background-position: center;
}

.reviews__container--bg-light-filter {}

.reviews__wrapper {}

.reviews__content {
    min-height: 100vh;
}

.reviews__title {
    color: var(--color-2);
    font-family: "Arial";
    font-size: 75px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}


.swiper {
    padding-bottom: 200px;
    transition: all 1s;
    margin-top: 152px;
}

.swiper-slide {
    padding: 39px 102px;
    border-radius: 38px;
    border: 4px solid var(--color-1);
    background: var(--color-4);
    box-sizing: border-box;
    position: relative;
    align-self: stretch;
}

.swiper-slide::before {
    content: "";
    display: block;
    background-image: url("../assets/icons/quote.svg");
    height: 44px;
    width: 55px;
    position: absolute;
    top: 35px;
    left: 25px;
    z-index: 4;
}

.swiper-slide-prev {
    transform: translateX(100%);
}


.swiper-slide-active {
    background: var(--color-2);
    position: relative;
    z-index: 10;
    transition: all 1s;
    transform: translate(50%, 50%);
}

.swiper-slide-next {}

.reviews__card-text {
    color: var(--color-1);
    font-family: "Arial";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: start;
}

.swiper-pagination-bullets {
    margin-top: 25px;
}

.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
}

.swiper-pagination-bullet-active {
    background: #9F9F9F;
}
</style>