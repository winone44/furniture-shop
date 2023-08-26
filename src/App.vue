<template>
  <div id="app">

<!--    <nav>-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:before,
*:after {
  box-sizing: border-box;
}

.card-img {
  object-fit: cover;
}
</style>
