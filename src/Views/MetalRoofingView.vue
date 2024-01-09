<template>
    <main class="metal-roofing">
        <TitleComp src="assets/images/metal-roofing/metal-roofing-top.jpg">
            Metal roofing
        </TitleComp>
        <DiscoverComp>
            <h3>Discover the Superiority of Metal Roofing:</h3>
            <p>
                Elevate your roofing solution with the durability and elegance of metal roofing. Crafted from
                high-quality steel, aluminum, copper, or zinc, metal roofing provides an exceptional blend of
                strength, longevity, and style.</p>
        </DiscoverComp>
        <ListComp :data="listData" src="assets/images/metal-roofing/metal-roofing-list.jpg" />
        <SwiperComp folderPath="assets/images/metal-roofing" numberSlides="18"></SwiperComp>
        <ContacInfoComp />
    </main>
</template>

<script>
import TitleComp from "@/components/TitleComp.vue";
import DiscoverComp from "@/components/DiscoverComp.vue";
import ListComp from "@/components/ListComp.vue";
import SwiperComp from "@/components/SwiperComp.vue";
import ContacInfoComp from '@/components/ContacInfoComp.vue';


export default {
    components: {
        TitleComp,
        DiscoverComp,
        ListComp,
        SwiperComp,
        ContacInfoComp,
    },
    data() {
        return {
            listData: [
                { title: "Lasting Durability", text: "With a lifespan of 40-70 years or more, metal roofs outshine traditional materials in terms of resilience and longevity." },
                { title: "Weather Resilience", text: "Embrace worry-free protection against rain, snow, hail, and wind. Metal roofs effortlessly shed snow, reducing structural strain." },
                { title: "Efficient Energy Performance", text: "Reflective surfaces curb heat absorption, slashing cooling costs and enhancing energy efficiency." },
                { title: "Minimal Maintenance", text: "Enjoy hassle-free upkeep with metal's resistance to rot, decay, and insect damage. Occasional cleaning and checks keep your roof in prime condition." },
                { title: "Fire Safeguard", text: "Non-combustible metal offers added defense against fires, making it a smart choice, especially in fire-prone areas." },
                { title: "Aesthetic Freedom", text: "Personalize your roof's appearance with a spectrum of colors, styles, and profiles to match your vision and architectural design." },
                { title: "Seamless Installation", text: "Our experts ensure seamless installation, securing metal panels with precision for water-tightness and longevity. Adequate ventilation and insulation prevent warping, maintaining your roof's integrity." },
                { title: "Economical Long-Term Choice", text: "While the initial investment may be higher, the enduring quality of metal roofing, coupled with lowered maintenance and energy expenses, make it a cost-effective, environmentally responsible choice in the long run." },
            ]
        }
    },
}
</script>

<style scoped></style>