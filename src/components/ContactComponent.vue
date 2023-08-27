<template>
  <b-container>
    <h1 class="text-center" style="margin-top: 50px">CONTACT</h1>
    <b-row style="margin-top:50px">
      <b-col md="6" class="py-3 py-md-0">
        <b-card
            :img-src="baseUrl + '/image/mapa.png'"
            overlay
        >
        </b-card>
      </b-col>
      <b-col md="6" class="py-3 py-md-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt repellat temporibus unde voluptate. Alias animi aspernatur atque blanditiis, commodi culpa delectus dicta distinctio doloremque dolores ducimus eos est id incidunt inventore, labore magni modi molestias necessitatibus nesciunt non odio officia quasi quis sequi similique sunt voluptas? Ad animi aperiam consectetur, consequatur cupiditate debitis delectus deleniti dignissimos dolorem dolores eius enim excepturi expedita fuga inventore ipsum itaque labore magni maiores modi natus nobis nulla perferendis perspiciatis quam quasi quo quos repudiandae sapiente ullam unde velit voluptatem, voluptatum. Autem deleniti distinctio excepturi, expedita, fugit illo laudantium mollitia odio optio quis quos reprehenderit sed sunt vero vitae. Alias culpa cum deleniti molestiae, nam, odit, officia quae quam quasi soluta tempora unde. Accusamus ad amet, culpa delectus dolor dolorum, esse est expedita facere hic impedit inventore itaque magnam maiores neque nesciunt odio odit provident quas quia sed sint totam? Eaque fugiat officia vel.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ContactComponent",
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
    }
  }
}
</script>

<style scoped>

</style>