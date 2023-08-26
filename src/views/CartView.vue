<template>
  <div>
    <NavbarTop />
    <div class="main-content">
      <NavbarMain />
    </div>
      <CartComponent />
    <FooterComponent />
  </div>

</template>

<script>
import FooterComponent from "@/components/FooterComponent";
import NavbarMain from "@/components/NavbarMain";
import NavbarTop from "@/components/NavbarTop";
import CartComponent from "@/components/CartComponent";

export default {
  name: "CartView",
  components: {
    CartComponent,
    FooterComponent,
    NavbarMain,
    NavbarTop,
  }
}
</script>

<style scoped>

</style>