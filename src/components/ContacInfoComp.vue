<template>
    <section class="contact-info">
        <div class="contact-info__container">
            <div class="contact-info__wrapper">
                <div class="contact-info__content">
                    <p class="contact-info__title">Elevate Your Roof to New Heights with Metal Roofing!</p>
                    <RouterLink to="/contact" class="button contact-info__button">Contact us</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-info {}

.contact-info__container {
    padding-top: 60px;
    padding-bottom: 100px;
}

.contact-info__wrapper {}

.contact-info__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
}

.contact-info__title {
    color: var(--color-3);
    font-family: var(--font-1);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.5px;
}

.contact-info__button {
    color: var(--color-1);
    font-family: var(--font-1);
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    background: var(--color-2);
}
</style>