<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__wrapper">
                <div class="footer__content">
                    <LogoComp class="footer__logo" color="#fff" />
                    <nav class="footer__navigation">
                        <ul class="footer__navigation-list">
                            <li class="footer__navigation-item" v-for="({ title, href }, i) in links" :key="i">
                                <RouterLink class="footer__navigation-link" :to="href">{{ title }}</RouterLink>
                            </li>
                        </ul>
                    </nav>
                    <div class="footer__social-container">
                        <a class="footer__social-link" href="https://www.facebook.com/" target="_blank">
                            <svg width="20" height="39" viewBox="0 0 20 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.9412 6.47563H19.5016V0.274625C18.8874 0.190125 16.7749 0 14.3146 0C9.18125 0 5.66475 3.22888 5.66475 9.16337V14.625H0V21.5572H5.66475V39H12.61V21.5589H18.0456L18.9085 14.6266H12.6084V9.85075C12.61 7.84713 13.1495 6.47563 15.9412 6.47563Z" />
                            </svg>
                        </a>
                        <a class="footer__social-link" href="https://www.instagram.com/" target="_blank">
                            <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M39.395 11.4661C39.3037 9.39392 38.9686 7.96928 38.4885 6.73481C37.9933 5.42445 37.2315 4.25129 36.2333 3.27604C35.258 2.28561 34.0771 1.516 32.782 1.02852C31.5403 0.548487 30.1231 0.213383 28.0509 0.122018C25.9632 0.0229156 25.3005 0 20.0055 0C14.7105 0 14.0477 0.0229156 11.9677 0.11428C9.8955 0.205645 8.47086 0.541047 7.23669 1.02079C5.92604 1.516 4.75288 2.27787 3.77763 3.27604C2.7872 4.25129 2.01789 5.43219 1.53011 6.72737C1.05007 7.96928 0.71497 9.38618 0.623605 11.4584C0.524503 13.5461 0.501587 14.2089 0.501587 19.5039C0.501587 24.7989 0.524503 25.4616 0.615867 27.5416C0.707232 29.6138 1.04263 31.0385 1.52267 32.2729C2.01789 33.5833 2.7872 34.7564 3.77763 35.7317C4.75288 36.7221 5.93378 37.4917 7.22896 37.9792C8.47086 38.4592 9.88776 38.7944 11.9603 38.8857C14.04 38.9774 14.703 39 19.998 39C25.293 39 25.9558 38.9774 28.0357 38.8857C30.108 38.7944 31.5326 38.4592 32.7668 37.9792C35.3878 36.9659 37.46 34.8936 38.4734 32.2729C38.9531 31.031 39.2885 29.6138 39.3799 27.5416C39.4712 25.4616 39.4941 24.7989 39.4941 19.5039C39.4941 14.2089 39.4864 13.5461 39.395 11.4661ZM35.883 27.3892C35.7991 29.2939 35.4791 30.3224 35.2125 31.0081C34.5572 32.7071 33.2087 34.0556 31.5097 34.7109C30.824 34.9776 29.788 35.2975 27.8908 35.3811C25.8338 35.4728 25.2168 35.4954 20.0132 35.4954C14.8096 35.4954 14.1849 35.4728 12.1353 35.3811C10.2306 35.2975 9.20208 34.9776 8.5164 34.7109C7.6709 34.3984 6.90129 33.9032 6.27662 33.2556C5.62903 32.6232 5.13382 31.8613 4.82133 31.0158C4.55468 30.3302 4.23475 29.2939 4.15112 27.397C4.05946 25.3399 4.03684 24.7227 4.03684 19.519C4.03684 14.3154 4.05946 13.6907 4.15112 11.6414C4.23475 9.73676 4.55468 8.70823 4.82133 8.02255C5.13382 7.17675 5.62903 6.40744 6.28436 5.78247C6.91647 5.13488 7.67834 4.63967 8.52414 4.32748C9.20982 4.06083 10.2461 3.7409 12.143 3.65698C14.2001 3.56561 14.8173 3.54269 20.0206 3.54269C25.232 3.54269 25.8489 3.56561 27.8985 3.65698C29.8032 3.7409 30.8317 4.06083 31.5174 4.32748C32.3629 4.63967 33.1325 5.13488 33.7572 5.78247C34.4048 6.41488 34.9 7.17675 35.2125 8.02255C35.4791 8.70823 35.7991 9.7442 35.883 11.6414C35.9744 13.6985 35.9973 14.3154 35.9973 19.519C35.9973 24.7227 35.9744 25.3322 35.883 27.3892Z" />
                                <path
                                    d="M20.0055 9.4856C14.4745 9.4856 9.98688 13.9729 9.98688 19.5042C9.98688 25.0355 14.4745 29.5228 20.0055 29.5228C25.5368 29.5228 30.0241 25.0355 30.0241 19.5042C30.0241 13.9729 25.5368 9.4856 20.0055 9.4856ZM20.0055 26.003C16.4172 26.003 13.5067 23.0927 13.5067 19.5042C13.5067 15.9157 16.4172 13.0054 20.0055 13.0054C23.594 13.0054 26.5043 15.9157 26.5043 19.5042C26.5043 23.0927 23.594 26.003 20.0055 26.003Z" />
                                <path
                                    d="M32.7595 9.08913C32.7595 10.3807 31.7122 11.428 30.4203 11.428C29.1287 11.428 28.0814 10.3807 28.0814 9.08913C28.0814 7.79722 29.1287 6.75024 30.4203 6.75024C31.7122 6.75024 32.7595 7.79722 32.7595 9.08913Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import LogoComp from './LogoComp.vue';

export default {
    components: {
        LogoComp,
    },
    data() {
        return {
            links: [
                { title: "General", href: "/" },
                { title: "Services", href: "/services" },
                { title: "About", href: "/about" },
                { title: "Contact", href: "/contact" },
            ]
        }
    }
}

</script>

<style scoped>
.footer {
    margin-top: auto;
    color: var(--color-1);
    font-family: "Arial";
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0938rem;
}

.footer__container {
    background: var(--color-2);
    padding: 1.75rem 0;
}

.footer__wrapper {}

.footer__content {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.footer__social-container {
    display: flex;
    gap: 1.75rem;
}

.footer__social-link {}

.footer__social-link>svg {
    fill: var(--color-1);
    height: 2.5rem;
    width: 2.5rem;
}

.router-link-active::before {
    content: "";
    background: var(--color-1);
}

.footer__logo {
    fill: var(--color-1);
    stroke: var(--color-1);
    width: 11.875rem;
    height: 10.0625rem;
}



.footer__navigation {
    flex: 1;
}

.footer__navigation-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.footer__navigation-item {
    display: flex;
}

.footer__navigation-link {}

@media (max-width: 600px) {
    .footer__logo {
        fill: var(--color-1);
        stroke: var(--color-1);
        width: 4.1rem;
        height: 3.5rem;
    }

    .footer__navigation-link {
        font-size: 0.7rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.0262rem;
    }

    .footer__social-link>svg {
        fill: var(--color-1);
        height: 1.2rem;
        width: 1.2rem;
    }
}
</style>