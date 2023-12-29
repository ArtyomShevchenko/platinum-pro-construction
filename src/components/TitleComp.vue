<template>
    <section :style="{ 'background-image': 'url(' + src + ')' }" class="top__container top__container--bg-dark-filter">
        <div class="top__wrapper">
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
    mounted() {
        console.log(this.src)
    },
    methods: {
        getImg() {
            return `url(${require(this.src)})`
        }
    }
}
</script>

<style >
.top {}

.top__container {
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 614px;
    display: flex;
    align-items: center;
}

.top__wrapper {}

.top__content {}

.top__title {
    text-align: center;
}

@media(max-width: 1024px) {
    .top__title {
        font-size: 45px;
    }
}

@media (max-width: 425px) {
    .top__title {
        text-align: center;
        font-family: var(--font-1);
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.72px;
    }
}
</style>