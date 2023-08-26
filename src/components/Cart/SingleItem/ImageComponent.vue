<template>
  <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
    <img :src="imageUrl"
         class="w-100" alt="Blue Jeans Jacket" />
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    imageUrl: String,
  }
}
</script>

<style scoped>

</style>