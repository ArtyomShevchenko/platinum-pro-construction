<template>
    <main class="contact">
        <TitleComp src="assets/images/contact-top-bg.jpg">Contact information</TitleComp>
        <FormComp />
    </main>
</template>

<script>
import TitleComp from '@/components/TitleComp.vue';
import FormComp from '@/components/FormComp.vue'

export default {
    components: {
        TitleComp,
        FormComp
    },
}
</script>

<style scoped></style>