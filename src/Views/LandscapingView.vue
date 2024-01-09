<template>
    <main class="painting-drywals">
        <TitleComp src="assets/images/landscaping/top.jpg">
            Landscaping
        </TitleComp>
        <DiscoverComp>
            <h3>Crafting Enchanting Outdoor Spaces through Expert Landscaping:</h3>
            <p> Welcome to Platinum Pro Construction, your gateway to turning outdoor dreams into reality. We specialize in
                transforming ordinary landscapes into breathtaking havens that reflect your vision and harmonize with
                nature.
            </p>
        </DiscoverComp>
        <MainInfo :data="mainInfoData" src="assets/images/landscaping/main.jpg" />

        <section class="landscaping-services">
            <div class="landscaping-services__container">
                <div class="landscaping-services__wrapper">
                    <div class="landscaping-services__content">
                        <h3 class="landscaping-services__title">Landscaping Services:</h3>
                        <div class="landscaping-services__cards">
                            <div class="landscaping-services__card">
                                <h4 class="landscaping-services__card-title">Xeriscaping</h4>
                                <p class="landscaping-services__card-text">Embrace water-wise landscaping with our
                                    xeriscaping expertise. Use drought-resistant plants and efficient irrigation methods to
                                    reduce water consumption without compromising aesthetics.</p>
                            </div>
                            <div class="landscaping-services__card">
                                <h4 class="landscaping-services__card-title">Rain Gardens</h4>
                                <p class="landscaping-services__card-text">Enhance your property's sustainability with rain
                                    gardens that naturally manage water runoff while adding visual interest through various
                                    plants.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ContacInfoComp />
    </main>
</template>

<script>
import TitleComp from "@/components/TitleComp.vue";
import DiscoverComp from "@/components/DiscoverComp.vue";
import MainInfo from '@/components/MainInfoComp.vue';
import ContacInfoComp from '@/components/ContacInfoComp.vue';

export default {
    components: {
        TitleComp,
        DiscoverComp,
        MainInfo,
        ContacInfoComp,
    },
    data() {
        return {
            mainInfoData: [
                {
                    title: "Landscaping Services:",
                    cards: [
                        { title: "Inspired Design", text: "Our expert landscape designers collaborate closely with you to conceive designs that capture your aesthetic preferences, lifestyle, and property's unique character." },
                        { title: "Elevated Curb Appeal", text: "Make a striking first impression with a meticulously landscaped front yard. We create inviting paths, vibrant gardens, and captivating focal points that leave a lasting impact." },
                        { title: "Functional Outdoor Living", text: "Maximize your outdoor space's potential by creating functional zones for relaxation, entertainment, and recreation. From serene patios to cozy fire pits, we create areas for every aspect of outdoor living." },
                        { title: "Sustainable Practices", text: "We take pride in our eco-friendly approach to landscaping. Our team incorporates native plants, efficient irrigation systems, and smart design to minimize environmental impact." },
                    ]
                },
                {
                    title: "Hardscaping Solutions",
                    cards: [
                        { title: "Stunning Hardscape Features", text: "Elevate your landscape's elegance with our hardscaping solutions. From elegant stone pathways to majestic retaining walls, we create lasting features that blend seamlessly with nature." },
                        { title: "Customized Paving", text: "Our skilled craftsmen offer a range of paving options, enhancing aesthetics and functionality. Choose from diverse materials to achieve the perfect look for your outdoor spaces." },
                        { title: "Water Features", text: "Immerse yourself in tranquility with our enchanting water features. We design and install ponds, fountains, and streams that provide soothing sounds and captivating beauty." },
                    ]
                },
            ]
        }
    },
}
</script>

<style scoped>
.landscaping-services {}

.landscaping-services__container {}

.landscaping-services__wrapper {}

.landscaping-services__content {}

.landscaping-services__title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
}

.landscaping-services__cards {
    margin-top: 78px;
    column-count: 2;
    column-rule: 1px solid var(--color-2);
}

.landscaping-services__card {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 15px 50px 30px;
}

.landscaping-services__card-title {
    color: var(--color-2);
    text-align: center;
    font-family: var(--font-1);
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.landscaping-services__card-text {
    color: var(--color-2);
    text-align: center;
    font-family: var(--font-1);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

@media(max-width: 768px) {
    .landscaping-services__cards {
        column-count: 1;
    }
}
</style>