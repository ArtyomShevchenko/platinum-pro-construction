<template>
    <section class="discover">
        <div class="discover__container">
            <div class="discover__wrapper">
                <div class="discover__content">
                    <slot />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.discover__container {
    padding: 13.875rem 0;
}

.discover__wrapper {
    max-width: 81.875rem;
}

.discover__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.discover>>>h1,
.discover>>>h2,
.discover>>>h3 {
    color: var(--color-2);
    text-align: center;
    font-family: var(--font-1);
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.discover>>>p {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
}

.discover>>>span {
    font-weight: 700;
}
</style>