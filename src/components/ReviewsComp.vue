<template>
    <section class="reviews">
        <div class="reviews__container reviews__container--bg-light-filter">
            <div class="reviews__wrapper">
                <div class="reviews__content">
                    <h2 class="reviews__title">Reviews</h2>

                    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                        :initialSlide="'1'" :autoplay="{
                            delay: 5000,
                            disableOnInteraction: false,
                        }" :coverflowEffect="{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
}" :pagination="true" :modules="modules">
                        <swiper-slide>
                            <div class="reviews__card">
                                <p class="reviews__card-text">I recently had the pleasure of working with Platinum Pro
                                    Construction guys on a home renovation project, and I couldn't be more impressed with
                                    their services. From start to finish, they demonstrated top-notch workmanship and
                                    professionalism that exceeded my expectations.
                                </p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="reviews__card">
                                <p class="reviews__card-text">I recently had the pleasure of working with Platinum Pro
                                    Construction guys on a home renovation project, and I couldn't be more impressed with
                                    their services. From start to finish, they demonstrated top-notch workmanship and
                                    professionalism that exceeded my expectations.
                                </p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="reviews__card">
                                <p class="reviews__card-text">I recently had the pleasure of working with Platinum Pro
                                    Construction guys on a home renovation project, and I couldn't be more impressed with
                                    their services. From start to finish, they demonstrated top-notch workmanship and
                                    professionalism that exceeded my expectations.
                                </p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="reviews__card">
                                <p class="reviews__card-text">I recently had the pleasure of working with Platinum Pro
                                    Construction guys on a home renovation project, and I couldn't be more impressed with
                                    their services. From start to finish, they demonstrated top-notch workmanship and
                                    professionalism that exceeded my expectations.
                                </p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="reviews__card">
                                <p class="reviews__card-text">I recently had the pleasure of working with Platinum Pro
                                    Construction guys on a home renovation project, and I couldn't be more impressed with
                                    their services. From start to finish, they demonstrated top-notch workmanship and
                                    professionalism that exceeded my expectations.
                                </p>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCoverflow, Pagination, Autoplay],
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
    height: 480px;
    transition: all 1s;
    margin-top: 203px;
    padding-bottom: 55px;
}

.swiper-slide {
    transition: transform .2s ease;
    width: 50%;
    transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(.5) !important;
}

.swiper-slide-prev {
    transform: translate3d(50%, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important;
}

.swiper-slide-active {
    transform: translate3d(0px, 144px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important;
}

.swiper-slide-active .reviews__card {
    background: var(--color-2);
}

.swiper-slide-next {
    transform: translate3d(-50%, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important;
}

.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
    background: none !important;
}

.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    margin-top: 25px;
}

.swiper-pagination-bullet-active {
    background: #9F9F9F;
}

.reviews__card {
    padding: 39px 102px;
    border-radius: 38px;
    border: 4px solid var(--color-1);
    background: var(--color-4);
    box-sizing: border-box;
    position: relative;
    margin-inline: 1rem;
}

.reviews__card::before {
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

.reviews__card-text {
    color: var(--color-1);
    font-family: "Arial";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: start;
}

@media (max-width: 1300px) {
    .swiper {
        height: 600px;
    }
}

@media (max-width: 1000px) {
    .swiper {
        height: 100%;
    }

    .swiper-slide {
        transition: transform .2s ease;
        width: 100%;
        transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important;
    }

    .swiper-slide-prev {
        transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important;
    }

    .swiper-slide-active {
        transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important;
    }

    .swiper-slide-active .reviews__card {
        background: var(--color-2);
    }

    .swiper-slide-next {
        transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1) !important;
    }
}

@media (max-width: 550px) {
    .reviews__container {
        padding: 56px 0;
    }

    .swiper {
        transition: all 1s;
        margin-top: 203px;
        padding-bottom: 20px;
        margin-top: 21px;
        margin-inline: 5%;
    }

    .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        margin-top: 4px;
    }

    .reviews__card {
        padding: 13px 31px 9px 31px;
        border-radius: 10px;
        border: 4px solid var(--color-1);
    }

    .reviews__card::before {
        content: "";
        display: block;
        background-image: url("../assets/icons/quote.svg");
        background-size: cover;
        height: 13px;
        width: 16px;
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 4;
    }

    .reviews__card-text {
        font-size: 7px;
    }

    .reviews__title {
        font-size: 20px;
        font-weight: 400;
        line-height: normal;
    }

    .reviews__content {
        min-height: 100%;
    }
}
</style>