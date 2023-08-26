<template>
  <div>
    <NavbarTop />
    <div class="main-content">
      <NavbarMain />
    </div>
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarTop from "@/components/NavbarTop";
import NavbarMain from "@/components/NavbarMain";
import AboutComponent from "@/components/AboutComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "AboutView",
  components: {
    FooterComponent,
    AboutComponent,
    NavbarMain,
    NavbarTop,
  }
}
</script>

<style scoped>

</style>