<template>
    <main class="ablout">
        <TitleComp src="assets/images/about/about-top.jpg">
            About Us
        </TitleComp>
        <DiscoverComp>
            <p>
                <span>Our goal</span> is to provide various construction-related
                services,
                deliver
                high-quality projects, and meet clients' needs while ensuring safety, efficiency, and
                sustainability.
            </p>
        </DiscoverComp>

        <section class="about-main-info">
            <div class="about-main-info__container about-main-info__container--bg-light-filter">
                <div class="about-main-info__wrapper">
                    <h2 class="about-main-info__title">The pillars our company stands on are the following:</h2>
                    <div class="about-main-info__cards">
                        <div class="about-main-info__card" v-for="({ title, text }, index) in cards" :key="index">
                            <h3 class="about-main-info__card-title">{{ title }}</h3>
                            <p class="about-main-info__card-text">{{ text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <OverallComp>
            <p>Overall, the goal of Platinum Pro Construction is to be a
                reputable,
                reliable, and competitive player in the construction industry, delivering projects that
                positively
                impact communities and stakeholders while ensuring a sustainable and profitable future for
                the
                company.</p>
            <img src="@/assets/images/about/about-overall.jpg" alt="Image">
        </OverallComp>

    </main>
</template>

<script>
import TitleComp from '@/components/TitleComp.vue';
import DiscoverComp from "@/components/DiscoverComp.vue";
import OverallComp from "../components/OverallComp.vue"

export default {
    components: {
        TitleComp,
        DiscoverComp,
        OverallComp,
    },
    data() {
        return {
            cards: [
                { title: "Customer Satisfaction", text: "Ensuring client satisfaction by delivering projects that meet or exceed their expectations, staying within budget, and completing projects on time." },
                { title: "Quality Construction", text: "Striving for excellence in construction, using high - quality materials, and adhering to industry best practices and safety standards." },
                { title: "Safety", text: "Prioritizing the safety of workers, clients, and the public by implementing proper safety protocols and ensuring compliance with safety regulations." },
                { title: "Efficiency and Timeliness", text: "Completing projects efficiently, meeting deadlines, and optimizing construction processes to minimize delays and costs." },
                { title: "Market Growth", text: "Expanding market reach, exploring new opportunities, and diversifying services to adapt to changing market demands." },
                { title: "Sustainability", text: "Incorporating sustainable construction practices to reduce the environmental impact of projects, such as using energy-efficient materials and promoting green building initiatives." },
                { title: "Repeat Business and Referrals", text: "Building long-term relationships with clients to secure repeat business and receive referrals based on a solid track record of successful projects." },
                { title: "Team Development", text: "Fostering a skilled and motivated workforce through training, career development, and a positive work environment." },
                { title: "Innovation and Technology", text: "Embracing innovative construction methods and technology to improve efficiency, reduce waste, and enhance project outcomes." },
                { title: "Professionalism and Integrity", text: "Maintaining a reputation for professionalism, ethical conduct, and integrity in all business dealings." },
                { title: "Financial Stability", text: "Achieving financial stability and profitability by managing projects effectively, controlling costs, and maintaining a steady stream of projects." },
                { title: "Community Engagement", text: "Being an active and responsible community member, contributing positively to local development and supporting social initiatives." },
            ]
        }
    }
}
</script>

<style scoped>
.ablout {
    padding-bottom: 6.25rem;
}

.about-main-info__container {
    background-image: url("../assets/images/about/about-top.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 8.25rem 0;
}

.about-main-info__title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 2.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
}

.about-main-info__cards {
    margin-top: 6.25rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20.625rem, auto));
    gap: 7.875rem 2.375rem;
    justify-content: center;
}

.about-main-info__card {}


.about-main-info__card-title {
    color: var(--color-2);
    text-align: center;
    font-family: var(--font-1);
    font-size: 1.6875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.about-main-info__card-text {
    color: var(--color-2);
    text-align: center;
    font-family: var(--font-1);
    font-size: 1.4375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 0.9375rem;
}
</style>