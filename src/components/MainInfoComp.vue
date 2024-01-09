<template>
    <section class="main-info">
        <div class="main-info__container main-info__container--bg-light-filter" :style="image">
            <div class="main-info__wrapper">
                <div class="main-info__content">
                    <div class="main-info__cards-container" v-for="(cards, index) in this.data" :key="index">
                        <h2 class="main-info__cards-title">{{ cards.title }}</h2>
                        <div class="main-info__cards">
                            <div class="main-info__card" v-for="(card, i) in cards.cards" :key="i">
                                <h3 class="main-info__card-title">{{ card.title }}</h3>
                                <p class="main-info__card-text">{{ card.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        src: String,
        data: Array
    },
    computed: {
        image() {
            if (this.src) {
                return {
                    backgroundImage: `url( ${require('@/' + this.src)} )`
                }
            }

            return null
        }
    },
}
</script>

<style scoped>
.main-info {}

.main-info__container {
    padding: 186px 0;
}

.main-info__container--bg-light-filter {}

.main-info__wrapper {
    max-width: 1478px;
}

.main-info__content {
    display: flex;
    flex-direction: column;
    gap: 118px;
}

.main-info__cards-container {}

.main-info__cards-title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
}

.main-info__cards {
    margin-top: 35px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    grid-gap: 3rem;
}

.main-info__card {
    border-radius: 2px;
    background: var(--color-7);
    box-shadow: 16px 16px 33px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(22.5px);
    padding: 30px 6px;
}

.main-info__card-title {
    color: var(--color-1);
    text-align: center;
    font-family: var(--font-1);
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 11px;
    position: relative;
}

.main-info__card-title::before {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    max-width: 114px;
    background-color: var(--color-1);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.main-info__card-text {
    color: var(--color-1);
    text-align: center;
    font-family: var(--font-1);
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
}
</style>