<template>
  <b-container>
    <div class="navbar-top">
      <div class="social-link">
        <i><img :src="baseUrl + '/image/twitter.png'" alt="" width="30px"></i>
        <i><img :src="baseUrl + '/image/facebook.png'" alt="" width="30px"></i>
        <i><img :src="baseUrl + '/image/google-plus.png'" alt="" width="30px"></i>
      </div>
      <div class="logo">
        <router-link :to="{ name: 'home'}" style="text-decoration: none; color: black"><h3>FURNITURE</h3></router-link>
      </div>
      <div class="icons">
        <div><i><img :src="baseUrl + '/image/search.png'" alt="" width="20px"></i></div>
        <div><i><img :src="baseUrl + '/image/heart.png'" alt="" width="20px"></i></div>
        <router-link :to="{ name: 'cart'}">
          <div class="shopping-cart">
            <i><img :src="baseUrl + '/image/shopping-cart.png'" alt="" width="25px"></i>
            <div v-show="$store.state.cartItems.length > 0" class="cart-items">{{ $store.state.cartItems.length }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "NavbarTop",
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
    }
  }
}
</script>

<style scoped>

.navbar-top {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
}

.social-link i img {
  margin-left: 10px;
  transition: 0.5s ease;
  cursor: pointer;
}

.social-link i img:hover {
  background-color: rgba(238, 224, 208);
  border-radius: 50px;
}

.shopping-cart {
  position: relative;
}

.cart-items {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  right: -10px;
  bottom: -10px;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 50%;
  background-color: red;
  color: white;
}

.icons {
  display: flex;
}

@media screen and (max-width: 420px) {
  .social-link i img {
    width: 20px;
  }
}

.logo h3 {
  font-weight: bold;
}

@media screen and (max-width: 420px) {
  .logo h3 {
    font-size: 20px;
  }
}

.icons i img {
  margin-left: 10px;
  cursor: pointer;
}

@media screen and (max-width: 420px) {
  .icons i img {
    width: 20px;
  }

}
</style>