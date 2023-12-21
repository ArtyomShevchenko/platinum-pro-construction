<template>
    <TopComp />
    <ServicesComp />
    <OurVisionComp />
    <ReviewsComp />
</template>

<script>
import TopComp from '@/components/TopComp.vue';
import ServicesComp from '@/components/ServicesComp.vue';
import OurVisionComp from "@/components/OurVisionComp.vue"
import ReviewsComp from '@/components/ReviewsComp.vue';

export default {
    components: {
        TopComp,
        ServicesComp,
        OurVisionComp,
        ReviewsComp,
    }
}
</script>

<style scoped></style>