<template>
  <div class="app-container">
    <HeaderComp />
    <main class="main">
      <RouterView></RouterView>
    </main>
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style>
@import url("./assets/styles/main.css");

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 1 auto;
}
</style>
