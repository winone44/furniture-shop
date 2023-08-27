<template>
  <div>
    <b-navbar class="navbar-color" toggleable="md">
      <b-container>
        <b-navbar-toggle target="nav-collapse">
          <template #default="{ expanded }">
            <span v-if="expanded"><i><img :src="baseUrl + '/image/menu.png'" alt="" width="30px"> </i></span>
            <span v-else><i><img :src="baseUrl + '/image/menu.png'" alt="" width="30px"> </i></span>
          </template>
        </b-navbar-toggle>

        <b-collapse class="navbar-nav" id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link :to="{ name: 'home' }" tag="b-nav-item" class="nav-link">Home</router-link>
          </b-navbar-nav>
          <b-navbar-nav>
            <router-link :to="{ name: 'shop' }" tag="b-nav-item" class="nav-link">Shop</router-link>
          </b-navbar-nav>
          <b-navbar-nav>
            <router-link :to="{ name: 'ToS' }" tag="b-nav-item" class="nav-link">Terms of Service</router-link>
          </b-navbar-nav>
          <b-navbar-nav>
            <router-link :to="{ name: 'about' }" tag="b-nav-item" class="nav-link">About</router-link>
          </b-navbar-nav>
          <b-navbar-nav>
            <router-link :to="{ name: 'contact' }" tag="b-nav-item" class="nav-link">Contact</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavbarMain",
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
    }
  }
}
</script>

<style>

/* navbar */
.navbar-color {
  background-color: rgba(238, 224, 208);
}

.navbar-nav {
  margin: auto;
}

.nav-link {
  font-weight: bold;
  color: black !important;
  transition: .5s ease;
  cursor: pointer;
}

.nav-link:hover {
  color: green !important;
}
</style>