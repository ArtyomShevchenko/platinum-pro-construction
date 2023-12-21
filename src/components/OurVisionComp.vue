<template>
    <section class="vision">
        <div class="vision__container vision--bg-dark-filter">
            <div class="vision__wrapper">
                <div class="vision__content">
                    <h2 class="vision__title">Our Vision</h2>
                    <p class="vision__text">To be a leading and innovative construction company that transforms skylines,
                        enhances communities,
                        and builds a sustainable future for generations to come. We envision a world where our projects
                        serve as timeless landmarks, setting new standards for quality, safety, and environmental
                        responsibility. Our commitment to excellence, client satisfaction, and continuous innovation shall
                        position us as the construction partner of choice, earning the trust of our stakeholders and leaving
                        a positive impact on every life touched by our work.</p>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.vision {}

.vision__container {
    padding: 80px 0;
    background-image: url("../assets/images/home-our-vision.jpg");
    background-size: cover;
    background-position: center;
}

.vision--bg-dark-filter {}

.vision__wrapper {}

.vision__content {
    padding-top: 50px;
    padding-bottom: 64px;
    max-width: 1410px;
    position: relative;
}

.vision__content::before,
.vision__content::after {
    content: "";
    display: block;
    width: 82%;
    height: 3px;
    background: var(--color-1);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.vision__content::after {
    content: "";
    top: auto;
    bottom: 0;
}


.vision__title {
    color: var(--color-1);
    text-align: center;
    font-family: "Arial";
    font-size: 75px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.vision__text {
    color: var(--color-1);
    text-align: center;
    font-family: "Barlow Condensed";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.92px;
    margin-top: 20px;
}

@media(max-width: 768px) {
    .vision__container {
        padding: 115px 1rem;
    }

    .vision__title {
        font-size: 20px;
    }

    .vision__text {
        font-size: 13px;
        letter-spacing: 0.78px;
        margin-top: 15px;
    }
}
</style>