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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
    transform: scale(1.2);
    margin-inline: 70px;
    aspect-ratio: 1/1.5;
    object-fit: cover;
    max-width: 340px;
    height: 100%;
    width: 100%;
    /* position: relative; */
}

@media(max-width: 650px) {
    .overall>>>img {
        transform: scale(1);
        max-width: 340px;
        object-fit: contain;
        margin-inline: auto;
        max-width: 100%;
        width: 100%;
    }
}
</style>