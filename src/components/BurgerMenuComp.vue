<template>
    <div class="navigation">
        <div class="burger__icon" v-on:click="isVisible = !isVisible">
            <span class="burger__icon-line"></span>
            <span class="burger__icon-line"></span>
            <span class="burger__icon-line"></span>
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

            <h3 class="navigation__list-title navigation__title">Platinum Pro<br />Moving</h3>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
            open: false,
            navigation: [
                { title: "General", href: "/" },
                {
                    title: "Services", href: "/services", links: [
                        { title: "Services One", href: "/services-1" },
                        { title: "Services Two", href: "/services-2" },
                        { title: "Services Three", href: "/services-3" },
                        { title: "Services Four", href: "/services-4" },
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
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.6px;
    text-align: start;
}

.burger__icon {
    padding: 1rem;
    width: 16px;
    height: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.burger__icon-line {
    display: block;
    width: 100%;
    height: 2px;
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
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.6px;
    padding: 7px 18px 7px 15px;
    min-width: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;
}

.navigation__title {
    color: var(--color-3);
    font-family: "Arial";
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.6px;
    text-align: start;
    cursor: auto;
    user-select: none;
}

.list-title:hover {
    background-color: lightblue;
}

.navigation__list-item {
    display: none;
    color: var(--color-4);
    font-family: Arial;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.6px;
    padding: 4px 0 4px 20px;
    cursor: pointer;
    transition: color .2s ease;
}


.navigation__list-item:hover {
    color: var(--color-3)
}

.navigation__list--visible~.navigation__list-item {
    display: block;
}

.navigation__list-title svg {
    transition: transform .2s ease;
}

.navigation__list--visible .navigation__list-title svg {
    transform: rotate(90deg);
}

.navigation__cross {
    width: 12px;
    height: 12px;
    position: relative;
    padding: 5px;
    margin-left: auto;
    margin-bottom: 7px;
}

.navigation__cross::before,
.navigation__cross::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 2px;
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