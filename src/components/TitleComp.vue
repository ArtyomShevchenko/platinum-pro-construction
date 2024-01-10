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
    --height: 38.375rem;
}

.top__container {
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 38.375rem;
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
        --height: 19.625rem;
    }

    .top__container {
        min-height: calc(var(--height) + 4.625rem);
    }

    .top__title {
        font-size: 2.8125rem;
    }
}

@media (max-width: 425px) {
    :root {
        --height: 0rem;
    }

    .top__title {
        text-align: center;
        font-family: var(--font-1);
        font-size: 0.75rem;
        font-weight: 400;
        letter-spacing: 0.045rem;
    }
}
</style>