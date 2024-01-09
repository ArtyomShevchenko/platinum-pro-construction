<template>
    <main class="painting-drywals">
        <TitleComp src="assets/images/windows-doors/windows-doors__top.jpg">
            Windows and Doors installation
        </TitleComp>
        <DiscoverComp>
            <h3>Elevate Your Home with Expert Windows and Doors Installation:
            </h3>
            <p>Welcome to Platinum Pro Construction, your partner in enhancing your space's beauty, functionality, and
                energy
                efficiency through our top-tier windows and doors installation services.
            </p>
        </DiscoverComp>
        <MainInfo :data="mainInfoData" src="assets/images/windows-doors/windows-doors__main-info.jpg" />
        <SwiperComp folderPath="assets/images/windows-doors" numberSlides="12"></SwiperComp>
        <ContacInfoComp />
    </main>
</template>

<script>
import TitleComp from "@/components/TitleComp.vue";
import DiscoverComp from "@/components/DiscoverComp.vue";
import MainInfo from '@/components/MainInfoComp.vue';
import ContacInfoComp from '@/components/ContacInfoComp.vue';
import SwiperComp from "@/components/SwiperComp.vue"

export default {
    components: {
        TitleComp,
        DiscoverComp,
        MainInfo,
        ContacInfoComp,
        SwiperComp,
    },
    data() {
        return {
            mainInfoData: [
                {
                    title: "Windows Installation",
                    cards: [
                        { title: "Bringing in Natural Light", text: "Our expert team understands the importance of natural light. We specialize in installing windows that flood your interiors with sunlight, creating a warm and inviting atmosphere." },
                        { title: "Energy Efficiency", text: "Upgrade your home's energy efficiency with our high-quality, insulated windows selection. Our windows help regulate indoor temperature, reducing energy consumption." },
                        { title: "Custom Design", text: "Your vision is our priority. We offer a range of window styles, sizes, and materials to match your aesthetic preferences and architectural design." },
                        { title: "Professional Craftsmanship", text: "With a keen eye for detail and precision, our installers ensure a seamless fit, weatherproofing, and proper functionality of your windows." },
                    ]
                },
                {
                    title: "Doors Installation",
                    cards: [
                        { title: "Inviting Entryways", text: "Make a statement with our expertly installed doors that welcome you and your guests. We offer a variety of styles, from classic to contemporary, to complement your home's character." },
                        { title: "Security and Durability", text: "Our doors not only enhance aesthetics but also provide security and durability. We offer options that are built to withstand the elements and protect your home." },
                        { title: "Energy-Efficient Options", text: "Upgrade to energy-efficient doors that prevent drafts, regulate temperature, and reduce utility bills while keeping your space comfortable year-round." },
                        { title: "Seamless Integration", text: "Our installation process ensures seamless integration of doors into your space, ensuring proper alignment, smooth operation, and a snug fit." },
                    ]
                },
            ]
        }
    },
}
</script>

<style scoped></style>