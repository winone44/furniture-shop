<template>
  <div>
    <NavbarTop />
    <div class="main-content">
      <NavbarMain />
    </div>
    <ContactComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarTop from "@/components/NavbarTop";
import NavbarMain from "@/components/NavbarMain";
import FooterComponent from "@/components/FooterComponent";
import ContactComponent from "@/components/ContactComponent";
export default {
  name: "ContactView",
  components: {
    FooterComponent,
    ContactComponent,
    NavbarMain,
    NavbarTop,
  }
}
</script>

<style scoped>

</style>