<template>
  <div>
    <NavbarTop />
    <div class="main-content">
      <NavbarMain />
    </div>
    <ToSComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarTop from "@/components/NavbarTop";
import NavbarMain from "@/components/NavbarMain";
import FooterComponent from "@/components/FooterComponent";
import ToSComponent from "@/components/ToSComponent";
export default {
  name: "ToSView",
  components: {
    ToSComponent,
    NavbarTop,
    NavbarMain,
    FooterComponent,
  }
}
</script>

<style scoped>

</style>