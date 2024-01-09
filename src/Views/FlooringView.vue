<template>
    <main class="flooring">
        <TitleComp src="assets/images/flooring/top.jpg">
            FlooringView
        </TitleComp>
        <DiscoverComp>
            <h3> Unveil the Beauty of Your Space with Expert Flooring Installation:</h3>
            <p>
                Welcome to Platinum Pro Construction. We specialize in transforming your interiors into stunning showcases
                through
                our impeccable flooring installation services.</p>
        </DiscoverComp>
        <OverallComp bg="var(--color-2)" color="var(--color-1)">
            <p>Flooring is not just a practical necessity, it's an essential element that
                sets the tone for your entire space. At Platinum Pro Construction, we understand the
                significance of flooring in transforming interiors into stunning canvases of style and comfort.
                Our range of premium flooring options is designed to cater to diverse tastes and preferences
                while ensuring uncompromising quality.</p>
            <img src="../assets/images/flooring/overall-1.jpg" alt="Image">
        </OverallComp>
        <ListComp padding="115" :data="listData" src="assets/images/flooring/main-list.jpg" />
        <OverallComp>
            <img src="../assets/images/flooring/overall-2.jpg" alt="Image">
            <p>Whether revitalizing your home, renovating an office, or crafting a
                commercial space, our flooring solutions are the foundation for your design aspirations. At
                Platinum Pro Construction, we bring together artistry, quality, and functionality to provide
                flooring that enhances your environment and elevates your everyday experiences. Contact us today
                to explore our range and embark on a journey to redefine your space through the beauty of
                flooring.</p>
        </OverallComp>
        <MainInfoComp :data="mainInfoData" src="assets/images/flooring/main-cards.jpg" />
        <ContacInfoComp />
    </main>
</template>

<script>
import TitleComp from "@/components/TitleComp.vue";
import DiscoverComp from "@/components/DiscoverComp.vue";
import ListComp from "@/components/ListComp.vue";
import ContacInfoComp from '@/components/ContacInfoComp.vue';
import MainInfoComp from "@/components/MainInfoComp.vue";
import OverallComp from "@/components/OverallComp.vue";


export default {
    components: {
        TitleComp,
        DiscoverComp,
        ListComp,
        ContacInfoComp,
        MainInfoComp,
        OverallComp,
    },
    data() {
        return {
            listData: [
                { title: "Unleash Your Style", text: "Whether your vision is classic elegance, modern chic, or rustic charm, we have the perfect flooring solution to complement your aesthetic. From hardwood to laminate, vinyl to tile, each material brings its unique texture and character to your living spaces." },
                { title: "Enduring Quality", text: "Our commitment to quality means your flooring investment is built to last. Our materials are sourced from trusted suppliers, and our installation is executed precisely, guaranteeing a long-lasting and durable foundation." },
                { title: "Professional Expertise", text: "Our skilled team of flooring experts is well-versed in the intricacies of installation. With meticulous attention to detail, we ensure that every plank, tile, or sheet is flawlessly placed, creating a seamless and visually pleasing result." },
                { title: "Functionality Meets Beauty", text: "Beyond aesthetics, our flooring solutions prioritize functionality. From easy maintenance to exceptional resistance against wear and tear, we offer floors that are as practical as they are appealing." },
                { title: "Tailored Consultation", text: "We believe in a personalized approach. Our experts work closely with you to understand your requirements, budget, and vision. We offer guidance and recommendations to help you make an informed decision that aligns with your unique needs." },
                { title: "Comprehensive Services", text: "Our services go beyond installation. We offer removal of old flooring, subfloor preparation, and additional features such as underfloor heating, ensuring a complete and hassle-free experience." },
                { title: "Customer Satisfaction", text: "Your satisfaction is our ultimate goal. We take pride in our commitment to delivering exceptional results that surpass your expectations. Your happiness with your new flooring is a testament to our dedication." },
            ],
            mainInfoData: [
                {
                    title: "Flooring Solutions",
                    cards: [
                        { title: "Elegant Variety", text: "Our wide range of flooring options lets you choose the perfect match for your style and functionality needs. From timeless hardwood to modern tile, we offer an array of choices." },
                        { title: "Seamless Installation", text: "Our skilled craftsmen ensure precision during every step of installation. We guarantee a smooth and flawless finish from subfloor preparation to final placement." },
                        { title: "Customization", text: "Your space is unique, and our flooring experts understand that. We work closely with you to personalize your flooring, whether it's intricate patterns, custom borders, or innovative designs." },
                        { title: "Residential and Commercial", text: "Our expertise spans both residential and commercial spaces, ensuring that your flooring needs are met, no matter the size or nature of the project." },
                    ]
                },
                {
                    title: "Flooring Types",
                    cards: [
                        { title: "Hardwood", text: "Elevate your interiors with the classic charm of hardwood flooring. Choose from a variety of wood species, finishes, and patterns that add warmth and sophistication." },
                        { title: "Laminate", text: "Experience the look of wood or stone with the durability of laminate. This cost-effective option offers versatility and easy maintenance, making it suitable for various settings." },
                        { title: "Tile", text: "Discover the world of tile, from sleek porcelain to natural stone. Achieve distinct aesthetics in bathrooms, kitchens, and beyond with a wide range of colors, sizes, and textures." },
                        { title: "Vinyl", text: "Combine style and durability with vinyl flooring. With an array of designs, including hardwood and tile mimics, it's an excellent choice for high-traffic areas." },
                    ]
                },
            ]
        }
    },
}
</script>

<style scoped></style>