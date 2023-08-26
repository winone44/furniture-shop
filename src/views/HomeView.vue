<template>
  <div>
    <NavbarTop />
      <div class="main-content">
        <NavbarMain />
        <HomeMainContent />
      </div>
    <CardRow1 />
    <CardRow2 />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarTop from "@/components/NavbarTop";
import HomeMainContent from "@/components/HomeMainContent";
import NavbarMain from "@/components/NavbarMain";
import CardRow1 from "@/components/CardRow1";
import CardRow2 from "@/components/CardRow2";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'HomeView',
  components: {
    FooterComponent,
    CardRow2,
    CardRow1,
    NavbarMain,
    HomeMainContent,
    NavbarTop,
  }
}
</script>

<style scoped>
.main-content{
  width: 100%;
  height: 90vh;
  background-image: url("/public/image/background.png");
  background-size: cover;
  background-position: 70%;
}
</style>
