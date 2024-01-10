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
    color: var(--color);
}

.overall__container {
    padding: 0;
    position: relative;
}

.overall__wrapper {}

.overall__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    align-items: center;
    grid-gap: 24px;
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

.overall:deep(.container) {
    position: relative;
    height: 100%;
    min-height: 400px;
}

.overall:deep(img) {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 70%;
}

.overall:deep(img:nth-child(2)) {
    position: absolute;
    top: 50%;
    left: 0;
    width: 70%;
    transform: translateY(-65%);
}

@media(max-width: 655px) {
    .overall {
        background-color: var(--color-1);
        color: var(--color-2);
    }

    .overall:deep(.container) {
        display: flex;
        justify-content: end;
        padding-top: 30%;
    }

    .overall:deep(img) {
        position: static;
        transform: translateY(0%);
        width: 70%;
    }

    .overall>>>p {
        padding: 10vw 0;
    }
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