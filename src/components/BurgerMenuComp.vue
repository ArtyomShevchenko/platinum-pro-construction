<template>
    <div class="navigation">
        <div class="burger__icon" v-on:click="isVisible = !isVisible">
            <div class="burger__icon-line"></div>
            <div class="burger__icon-line"></div>
            <div class="burger__icon-line"></div>
        </div>

        <nav class="navigation__body" v-if="isVisible">
            <div class="navigation__cross" @click="isVisible = !isVisible"></div>
            <ul v-for="({ title, href, links }, index) in navigation" :key="index" class="navigation__list"
                :class="{ 'navigation__list--visible': open }">

                <li v-if="links" class="navigation__list-title" v-on:click="handleOpenList">
                    {{ title }}
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                        <path d="M1 1L6 5.5L1 10" stroke="#27374D" stroke-width="0.7" />
                    </svg>
                </li>

                <li v-else class="navigation__list-title" v-on:click="handleOpenList">
                    <RouterLink :to="href" @click="isVisible = false">{{ title }}</RouterLink>
                </li>

                <li v-for="(link, index) in links" :key="index" class="navigation__list-item" @click="isVisible = false">
                    <RouterLink :to="link.href">{{ link.title }}</RouterLink>
                </li>
            </ul>

            <RouterLink to="/platinum-pro-moving" @click="isVisible = false"
                class="navigation__list-title navigation__title">Platinum Pro<br />Moving
            </RouterLink>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: true,
            open: false,
            navigation: [
                { title: "General", href: "/" },
                {
                    title: "Services", href: "/services", links: [
                        { title: "Metal roofing", href: "/metal-roofing" },
                        { title: "Painting / Drywalls", href: "/painting-drywals" },
                        { title: "Windows / Doors", href: "/windows-doors" },
                        { title: "Landscaping", href: "/landscaping" },
                        { title: "Flooring", href: "/flooring" },
                    ]
                },
                { title: "About", href: "/about" },
                { title: "Contact", href: "/contact" },
            ]
        }
    },
    methods: {
        handleOpenList(e) {
            this.open = !this.open
            e.target.classList.toggle("navigation__list--visible");
        }
    },
}
</script>

<style scoped>
.navigation {
    color: #27374D;
    font-family: Arial;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0375rem;
    text-align: start;
    margin-inline: 1rem;
}

.burger__icon {
    width: 1rem;
    height: 0.625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

.burger__icon-line {
    min-width: 1.25rem;
    height: 0.125rem;
    background-color: var(--color-1);
}

.burger__item-list {
    display: none;
}

.navigation__body {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 50;
    background-color: var(--color-1);
}

.navigation__list {}

.navigation__list-title {
    color: var(--color-2);
    font-family: "Arial";
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0375rem;
    padding: 0.4375rem 1.125rem 0.4375rem 0.9375rem;
    min-width: 4.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;
}

.navigation__title {
    color: var(--color-3);
    font-family: "Arial";
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.0375rem;
    text-align: start;
    cursor: pointer;
}

.list-title:hover {
    background-color: lightblue;
}

.navigation__list-item {
    display: none;
    color: var(--color-4);
    font-family: Arial;
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0375rem;
    padding: 0.25rem 0 0.25rem 1.25rem;
    cursor: pointer;
    transition: color .0s ease;
}

.navigation__list-item:hover {
    color: var(--color-3)
}

.navigation__list--visible~.navigation__list-item {
    display: block;
}

.navigation__list-title svg {
    transition: transform 0s ease;
}

.navigation__list--visible .navigation__list-title svg {
    transform: rotate(90deg);
}

.navigation__cross {
    width: 0.75rem;
    height: 0.75rem;
    position: relative;
    padding: 0.3125rem;
    margin: 0.4375rem 1.125rem 0.4375rem auto;
    cursor: pointer;
}

.navigation__cross::before,
.navigation__cross::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.125rem;
    border-radius: 0.125rem;
    background-color: var(--color-3);
    position: absolute;
    inset: 0;
    margin: auto;
    transform: rotate(45deg);
}

.navigation__cross::after {
    transform: rotate(-45deg);
}
</style>