<template>
    <section class="main-list">
        <div class="main-list__container main-list__container--bg-light-filter" :style="[image, cssVars]">
            <div class="main-list__wrapper">
                <div class="main-list__content">
                    <ol class="main-list__list">
                        <li class="main-list__item" v-for="({ title, text }, index) in data" :key="index">
                            <p class="main-list__count">{{ index + 1 }}</p>
                            <h3 class="main-list__title">{{ title }}</h3>
                            <p class="main-list__text">{{ text }}</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        src: String,
        data: Array,
        padding: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        image() {
            if (this.src) {
                return {
                    backgroundImage: `url( ${require('@/' + this.src)} )`
                }
            }

            return null
        },
        cssVars() {
            return {
                '--padding': this.padding + 'px'
            }
        }
    },
}
</script>

<style scoped>
.main-list__container {
    background-size: cover;
    background-position: center;
    position: relative;
    padding-inline: 0;
    padding-top: calc(50px + var(--padding));
    padding-bottom: calc(50px + var(--padding));
}

.main-list__wrapper {}

.main-list__content {}

.main-list__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.main-list__item {
    display: grid;
    grid-template-columns: minmax(0, 70px) 1fr;
    gap: 10px;
    justify-items: start;
}

.main-list__count {
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

.main-list__title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    position: relative;
    align-self: end;
}

.main-list__title::before {
    content: "";
    display: block;
    width: calc(100% + 40px);
    height: 3px;
    background-color: var(--color-2);
    position: absolute;
    bottom: 0;
    left: -40px;
}

.main-list__text {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    grid-column: 2/3;
}

@media(max-width: 1400px) {
    .main-list__content {
        padding-inline: 22px;
    }
}

@media(max-width: 768px) {

    .main-list__container {
        padding: 25px 0;
    }

    .main-list__item {
        display: grid;
        grid-template-columns: minmax(0, 20px) 1fr;
        gap: 0 4px;
        justify-items: start;
    }

    .main-list__list {
        gap: 18px;
    }

    .main-list__count {
        font-size: 15px;
        width: 20px;
        aspect-ratio: 1/1;
        border: 1px solid var(--color-2);
    }

    .main-list__title {
        font-size: 12px;
        font-weight: 700;
        align-self: center;
    }

    .main-list__title::before {
        content: "";
        display: none;
    }

    .main-list__text {
        font-size: 9px;
    }
}
</style>