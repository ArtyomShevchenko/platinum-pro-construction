<template>
    <section class="services">
        <div class="services__container services__container--bg-light-filter">
            <div class="services__wrapper">
                <div class="services__content">
                    <h2 class="services__title">Our Services</h2>
                    <div class="services__card-container">
                        <div class="services__card">
                            <img src="@/assets/icons/metal-roofing.svg" class="services__card-img" alt="Icon">
                            <h3 class="services__card-title">Metal roofing</h3>
                            <p class="services__card-text">Metal roofing offers a resilient and sleek solution for your
                                home. Its longevity and modern
                                appeal make it an excellent choice for protecting and enhancing your property.</p>
                            <RouterLink to="/metal-roofing" class="services__card-button button">Learn more</RouterLink>
                        </div>

                        <div class="services__card">
                            <img src="@/assets/icons/painting-drywalls.svg" class="services__card-img" alt="Icon">
                            <h3 class="services__card-title">Painting / Drywalls</h3>
                            <p class="services__card-text">Elevate your interiors with our expert painting and drywall
                                services. We bring life to your walls, adding color and texture to create a fresh, polished
                                look.</p>
                            <RouterLink to="/painting-drywalls" class="services__card-button button">Learn more</RouterLink>
                        </div>

                        <div class="services__card">
                            <img src="@/assets/icons/windows-doors.svg" class="services__card-img" alt="Icon">
                            <h3 class="services__card-title">Windows / Doors</h3>
                            <p class="services__card-text">Enhance your home with our precision windows and doors
                                installation. Experience a perfect blend of aesthetics, security, and energy efficiency for
                                your living spaces.</p>
                            <RouterLink to="/windows-doors" class="services__card-button button">Learn more</RouterLink>
                        </div>

                        <div class="services__card">
                            <img src="@/assets/icons/landscaping.svg" class="services__card-img" alt="Icon">
                            <h3 class="services__card-title">Landscaping</h3>
                            <p class="services__card-text">Our landscaping services craft outdoor havens. Elevate your
                                surroundings with expert design, lush greenery, and serene elements, fostering a harmonious
                                connection with the outdoors.</p>
                            <RouterLink to="/landscaping" class="services__card-button button">Learn more</RouterLink>
                        </div>

                        <div class="services__card">
                            <img src="@/assets/icons/flooring.svg" class="services__card-img" alt="Icon">
                            <h3 class="services__card-title">Flooring</h3>
                            <p class="services__card-text">Our flooring solutions redefine spaces. From elegant hardwood to
                                versatile tile, we transform floors into stunning canvases that marry style with durability.
                            </p>
                            <RouterLink to="/flooring" class="services__card-button button">Learn more</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services {}

.services__container {
    background-image: url("../assets/images/home-services.jpg");
    background-size: cover;
    background-position: center;
    padding-top: 160px;
    padding-bottom: 180px;
}

.services__wrapper {}

.services__content {
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.services__title {
    color: var(--color-2);
    font-family: "Arial";
    font-size: 75px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.services__card-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    max-width: 900px;
    margin-inline: auto;
}

.services__card:nth-child(4n) {
    grid-column: span 3;
    justify-self: end;
}

.services__card:nth-child(5n) {
    grid-column: span 3;
}

.services__card {
    grid-column: span 2;
    padding: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    max-width: 300px;
    position: relative;
}

.services__card::before {
    content: "";
    display: block;
    height: 50%;
    width: 1px;
    background: var(--color-2);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}


.services__card:nth-child(3n)::before,
.services__card:last-child::before {
    content: "";
    display: none;
}

.services__card-img {
    max-height: 80px;
}


.services__card-title {
    margin-top: 14px;
    color: var(--color-2);
    font-family: "Arial";
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.services__card-text {
    color: var(--color-2);
    text-align: center;
    font-family: "Arial";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 16px;
}

.services__card-button {
    color: var(--color-1);
    font-family: "Arial";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 4px 19px;
    background: var(--color-2);
    margin-top: auto;
}

.services__card-button::after {
    content: "";
    display: inline-block;
    background-image: url("../assets/icons/arrow-1.svg");
    width: 36px;
    height: 8px;
    margin-left: 7px;
}

@media (max-width: 900px) {
    .services__card-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .services__card {
        grid-column: auto;
    }

    .services__card-img {
        max-height: 50px;
    }

    .services__card:nth-child(4n) {
        grid-column: auto/auto;
        justify-self: stretch;
    }

    .services__card:nth-child(5n) {
        grid-column: span 2;
        justify-self: center;
    }
}

@media(max-width: 600px) {

    .services__container {
        padding: 20px 0;
    }


    .services__title {
        color: var(--color-2);
        font-family: "Arial";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .services__card {
        max-width: 104px;
        padding: 13px;
    }

    .services__card::before {
        content: "";
        display: none;
    }

    .services__card-img {
        max-height: 30px;
    }


    .services__card-title {
        margin-top: 0;
        font-size: 11px;
    }

    .services__card-text {
        font-size: 7px;
        margin-bottom: 0;
    }

    .services__card-button {
        font-size: 6px;
        padding: 4px 10px;
    }

    .services__card-button::after {
        display: none;
    }
}
</style>