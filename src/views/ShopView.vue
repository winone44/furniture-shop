<template>
  <div>
    <NavbarTop />
    <div class="main-content">
      <NavbarMain />
    </div>
    <b-container>
      <h3 class="text-center" style="margin-top: 50px">TRENDILY PRODUCTS</h3>
      <b-row style="margin-top: 50px;">
        <!--single item-->
        <b-col md="3" class="py-3" v-for="item in $store.state.shopItems" :key="item.shopIdItem">
          <b-card
              :img-src="item.imageUrl"
          >
            <b-card-body>
              <b-card-title>{{item.title}}</b-card-title>
              <b-card-text>{{item.price}} zł</b-card-text>
              <div id="btn3"><button @click="addToCartMethod(item)">Dodaj do <b-icon icon="cart-plus" /></button></div>
            </b-card-body>
          </b-card>
        </b-col>
        <!--single item-->
<!--    <CardRow3 />-->
      </b-row>
    </b-container>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarTop from "@/components/NavbarTop";
import NavbarMain from "@/components/NavbarMain";
import FooterComponent from "@/components/FooterComponent";
export default {
  name: "ShopView",
  components: { NavbarTop, NavbarMain, FooterComponent},
  data() {
    return {

    }
  },
  methods: {
    addToCartMethod(item) {
      let payload = {
        shopIdItem: item.shopIdItem,
        imageUrl: item.imageUrl,
        color: item.color,
        title: item.title,
        price: item.price,
        stock: 1,
      }
      this.$store.dispatch('addToCart',payload)
      this.$bvToast.toast(`Add 1 ${payload.title}`, {
        title: 'Card',
        autoHideDelay: 5000,
        appendToast: false
      })
    }
  }
}
</script>

<style scoped>
#btn3 {
  text-align: center;
}

#btn3 button {
  width: 150px;
  height: 30px;
  background: transparent;
  border: 1px solid black;
  transition: .5s ease;
  cursor: pointer;
}
#btn3 button:hover {
  background-color: rgba(238,224,208);
}

@media screen and (max-width: 992px){
  #btn3 button {
    width: 100px;
  }
}
</style>