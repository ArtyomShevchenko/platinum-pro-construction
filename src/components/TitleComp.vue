<template>
    <section class="top__container top__container--bg-dark-filter" :style="image">
        <div class=" top__wrapper">
            <div class="top__content">
                <h1 class="top__title">
                    <slot />
                </h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        src: String
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

<style >
:root {
    --height: 614px;
}

.top__container {
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 614px;
    min-height: var(--height);
    display: flex;
    align-items: center;
    padding: 0;
}

.top__wrapper {}

.top__content {}

.top__title {
    text-align: center;
}

@media(max-width: 1024px) {
    :root {
        --height: 314px;
    }

    .top__container {
        min-height: calc(var(--height) + 74px);
    }

    .top__title {
        font-size: 45px;
    }
}

@media (max-width: 425px) {
    :root {
        --height: 114px;
    }

    .top__title {
        text-align: center;
        font-family: var(--font-1);
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.72px;
    }
}
</style>