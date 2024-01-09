<template>
    <main class="flooring">
        <TitleComp src="assets/images/flooring/top.jpg">
            Platinum Pro Moving
        </TitleComp>

        <OverallComp bg="var(--color-2)" color="var(--color-1)">
            <p>Flooring is not just a practical necessity, it's an essential element that
                sets the tone for your entire space. At Platinum Pro Construction, we understand the
                significance of flooring in transforming interiors into stunning canvases of style and comfort.
                Our range of premium flooring options is designed to cater to diverse tastes and preferences
                while ensuring uncompromising quality.</p>
            <img src="../assets/images/flooring/overall-1.jpg" alt="Image">
        </OverallComp>

        <DiscoverComp>
            <h3>Comprehensive Moving Services for a Stress-Free Transition</h3>
            <p>Moving to a new home can be an exciting chapter in your life but can also bring a fair share of challenges
                and
                stress. That's where our professional moving services come in. We understand that every move is unique and
                provide
                you with a seamless and personalized experience that meets your needs.
            </p>
        </DiscoverComp>
        <ListComp :data="listData" src="assets/images/flooring/main-list.jpg" />
        <ContacInfoComp />
    </main>
</template>

<script>
import TitleComp from "@/components/TitleComp.vue";
import DiscoverComp from "@/components/DiscoverComp.vue";
import ListComp from "@/components/ListComp.vue";
import ContacInfoComp from '@/components/ContacInfoComp.vue';
import OverallComp from "@/components/OverallComp.vue";

export default {
    components: {
        TitleComp,
        DiscoverComp,
        ListComp,
        ContacInfoComp,
        OverallComp,
    },
    data() {
        return {
            listData: [
                { title: "Planning and Consultation", text: "Our process begins with a thorough consultation. We'll discuss your requirements, timeline, and any special considerations you may have. Our experienced team will create a customized moving plan that outlines every detail, ensuring a well-organized and efficient move." },
                { title: "Packing Services", text: "Want to avoid dealing with the hassle of packing? Our skilled packers will expertly handle the job for you. We use high-quality packing materials and techniques to protect your belongings during transit." },
                { title: "Secure Transportation", text: "Our fleet of well-maintained vehicles is equipped to transport your possessions to your new destination safely. We take precautions to secure your items and prevent damage during the journey." },
                { title: "Specialized Handling", text: "Our team has the expertise to handle delicate or valuable items with care. We ensure these items are packed and transported securely, whether it's fragile glassware, artwork, or electronics." },
                { title: "Unloading and Unpacking", text: "We'll unload your belongings and carefully unpack them once we arrive at your new home. This means you can settle into your new space without the stress of unpacking boxes." },
                { title: "Assembly and Setup", text: "If you have furniture or other items that require assembly, our team can take care of that for you. We'll ensure everything is set up and arranged according to your preferences." },
                { title: "Storage Solutions", text: "If your new home is still being prepared to accommodate all your belongings, we offer flexible storage options. Your items will be kept safe and secure until you're ready for them." },
                { title: "Transparent Pricing", text: "We believe in honesty and transparency. Our pricing is straightforward, and there are no hidden fees. You'll know exactly what to expect from the beginning." },
            ],
        }
    },
}
</script>

<style scoped></style>