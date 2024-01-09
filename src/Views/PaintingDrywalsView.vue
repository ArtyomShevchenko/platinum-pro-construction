<template>
    <main class="painting-drywals">
        <TitleComp src="assets/images/painting-and-drywalls/painting-and-drywalls__top.jpg">
            Painting and drywalls
        </TitleComp>
        <DiscoverComp>
            <h3>Transforming Spaces with Expert Painting and Drywall Services:</h3>
            <p>Welcome to Platinum Pro Construction, where we specialize in revitalizing interiors through
                top-notch painting and drywall solutions. Our skilled team brings life to your spaces, creating a
                harmonious blend of aesthetics and functionality.
            </p>
        </DiscoverComp>
        <MainInfo :data="mainInfoData" src="assets/images/painting-and-drywalls/painting-and-drywalls__main-info.jpg" />
        <SwiperComp folderPath="assets/images/painting-and-drywalls" numberSlides="18"></SwiperComp>
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
                    title: "Painting Services",
                    cards: [
                        { title: "Elevate Ambiance", text: "Our painting experts understand the power of color. Whether you seek serene neutrals, vibrant accents, or a unique palette, we'll help you achieve the perfect atmosphere." },
                        { title: "Precision Application", text: "Using premium paints and cutting-edge techniques, we ensure smooth and flawless application for a professional finish that stands the test of time." },
                        { title: "Customized Design", text: "Our team collaborates closely with you to bring your vision to life. From color selection to texture implementation, we create a space that resonates with your style." },
                        { title: "Residential and Commercial", text: "Whether revamping your home or enhancing your business environment, our painting services cater to residential and commercial needs." },
                    ]
                },
                {
                    title: "Drywall Solutions",
                    cards: [
                        { title: "Seamless Installation", text: "Our drywall experts craft a clean canvas for your interiors. With meticulous installation, we create even surfaces ready for the transformative touch of paint." },
                        { title: "Repair and Restoration", text: "From minor dents to extensive damage, we have the expertise to restore your walls to their original condition. Our team ensures a seamless blend, making repairs virtually invisible." },
                        { title: "Soundproofing and Insulation", text: "Beyond aesthetics, our drywall services offer functional benefits. Enhance privacy and energy efficiency through our specialized soundproofing and insulation solutions." },
                        { title: "Timely Project Completion", text: "We understand the importance of timelines. Our efficient approach ensures your painting and drywall projects are completed within schedule, minimizing disruption." },
                    ]
                },
            ]
        }
    },
}
</script>

<style scoped></style>