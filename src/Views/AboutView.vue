<template>
    <main class="ablout">
        <div class="about__container">
            <section class="about__title-container about__title-container--bg-dark-filter">
                <div class="about__wrapper">
                    <h1 class="about__title">About Us</h1>
                </div>
            </section>

            <section class="about__our-goals">
                <div class="about__wrapper">
                    <p class="about__our-goals-text"><span>Our goal</span> is to provide various construction-related
                        services,
                        deliver
                        high-quality projects, and meet clients' needs while ensuring safety, efficiency, and
                        sustainability.</p>
                </div>
            </section>

            <section class="about__cards-container about__cards-container--bg-light-filter">
                <div class="about__wrapper">
                    <h2 class="about__cards-title">The pillars our company stands on are the following:</h2>
                    <div class="about__cards">
                        <div class="about__card" v-for="({ title, text }, index) in cards" :key="index">
                            <h3 class="about__card-title">{{ title }}</h3>
                            <p class="about__card-text">{{ text }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about__overall">
                <div class="about__wrapper">
                    <div class="about__overall-content">
                        <p class="about__overall-text">Overall, the goal of Platinum Pro Construction is to be a reputable,
                            reliable, and competitive player in the construction industry, delivering projects that
                            positively
                            impact communities and stakeholders while ensuring a sustainable and profitable future for the
                            company.</p>
                        <img src="../assets/images/about-overall.jpg" alt="Image" class="about__overall-img">
                    </div>
                </div>
            </section>

        </div>
    </main>
</template>

<script>
export default {
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
.ablout {}

.about__container {
    padding: 0;
}

.about__title-container {
    background-image: url("../assets/images/about-top.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 614px;
    display: flex;
    align-items: center;
}

.about__wrapper {}

.about__title {}

.about__content {}

.about__our-goals {
    padding: 160px 0;
}

.about__our-goals-text {
    color: var(--color-2);
    text-align: center;
    font-family: "Arial";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.about__our-goals-text span {
    font-weight: 700;
}

.about__cards-container {
    background-image: url("../assets/images/about-top.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 132px 0;
}

.about__cards-title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.about__cards {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 126px 38px;
}

.about__card {}


.about__card-title {
    color: var(--color-2);
    text-align: center;
    font-family: var(--font-1);
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.about__card-text {
    color: var(--color-2);
    text-align: center;
    font-family: var(--font-1);
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 15px;
}

.about__overall {}

.about__overall-content {
    display: grid;
    grid-template-columns: 100px 1fr 1fr 100px;
    place-items: center;
}

.about__overall-text {
    max-width: 656px;
    text-align: start;
    grid-column: 2/3
}

.about__overall-img {
    transform: translateY(-89px);
    max-width: 440px;
    aspect-ratio: 1/1.5;
    object-fit: cover;
    height: 100%;
    width: 100%;
}

@media (max-width: 1000px) {

    .about__cards {
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 100px 28px;
    }

    .about__overall-text {
        font-size: 26px;
    }
}


@media (max-width: 768px) {

    .about__cards {
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 80px 22px;
    }

    .about__overall-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
        gap: 1rem;
    }

    .about__overall-text {
        max-width: 656px;
        text-align: start;
        grid-column: auto;
        font-size: 18px;
    }
}


@media (max-width: 550px) {

    .about__cards {
        margin-top: 80px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .about__overall-img {
        transform: translateY(0);
        max-width: 440px;
        max-height: 660px;
        height: 100%;
        width: 100%;
    }

    .about__overall-text {
        font-size: 9px;
        text-align: center;
    }

}
</style>