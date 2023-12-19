<template>
    <div class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item">
                <RouterLink class="navigation__link" to="/">General</RouterLink>
            </li>
            <li class="navigation__item">
                <RouterLink class="navigation__link" to="/services">Services</RouterLink>
            </li>
            <li class="navigation__item">
                <RouterLink class="navigation__link" to="/about">About</RouterLink>
            </li>
            <li class="navigation__item">
                <RouterLink class="navigation__link" to="/contact">Contact</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.navigation {}

.navigation__list {
    display: flex;
}

.navigation__item {
    height: 50px;
    padding-inline: 26px;
    position: relative;
    display: flex;
    align-items: center;
}

.navigation__item::after {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background: var(--color-2);
    position: absolute;
    right: 0;
    top: 0;
}

.navigation__item:last-child::after {
    content: "";
    display: none;
}

.navigation__link {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    position: relative;
}

.navigation__link:hover {
    color: inherit;
}

.router-link-active::before {
    content: "";
    display: block;
    width: 85%;
    height: 2px;
    background: var(--color-2);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-inline: auto;
}
</style>