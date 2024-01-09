<template>
    <section class="overall" :style="cssVars">
        <div class="overall__container">
            <div class="overall__wrapper">
                <div class="overall__content">
                    <slot />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        bg: {
            type: String,
            default: "var(--color-1)",
        },
        color: {
            type: String,
            default: "var(--color-2)",
        }
    },
    computed: {
        cssVars() {
            return {
                '--bg': this.bg,
                '--color': this.color,
            }
        }
    }
}
</script>

<style scoped>
.overall {
    background-color: var(--bg);
    color: var(--color)
}

.overall__container {
    padding: 0;
}

.overall__wrapper {}

.overall__content {
    display: flex;
}

.overall>>>p {
    color: inherit;
    font-family: var(--font-1);
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 165px 0;
}

.overall>>>img {
    transform: scale(1.3);
    margin-inline: 70px;
    max-width: 340px;
    aspect-ratio: 1/1.5;
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: relative;
}

/* 
@media (max-width: 1000px) {
    .overall__text {
        font-size: 26px;
    }
}

@media (max-width: 768px) {
    .overall__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        gap: 1rem;
    }

    .overall__text {
        max-width: 656px;
        text-align: start;
        grid-column: auto;
        font-size: 18px;
    }
}

@media (max-width: 550px) {
    .overall__img {
        transform: translateY(0);
        max-width: 440px;
        max-height: 660px;
        height: 100%;
        width: 100%;
    }

    .overall__text {
        font-size: 9px;
        text-align: center;
    }

} */
</style>