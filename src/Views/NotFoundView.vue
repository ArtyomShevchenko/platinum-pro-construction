<template>
    <div class="not-found">
        <div class="not-found__container">
            <div class="not-found__wrapper">
                <div class="not-found__content">
                    <h2 class="not-found__title">Page not found or has been deleted.</h2>
                    <p class="not-found__status">Status: <b>404</b></p>
                    <RouterLink type="button" class="button not-found__button" to="/">To General</RouterLink>
                    <img class="not-found__img" src="@/assets/images/not-found.gif" alt="Animation">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.not-found {
    font-size: 20px;
}

.not-found__container {}

.not-found__wrapper {}

.not-found__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
}

.not-found__title {
    font-size: 2em;
}

.not-found__status {
    font-size: 1.2em;
}

.not-found__button {
    background: linear-gradient(var(--color-3) 33%, var(--color-2) 66%);
    background-size: 100% 300%;
    background-position: bottom;
    color: var(--color-1);
    transition: background .2s ease;
    font-size: 1em;
}

.not-found__button:hover {
    background-position: top;
}

.not-found__img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}
</style>