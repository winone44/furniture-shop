<template>
  <b-container>
    <h1 class="text-center" style="margin-top: 50px">ABOUT</h1>
    <b-row style="margin-top:50px">
      <b-col md="6" class="py-3 py-md-0">
        <b-card
          :img-src="baseUrl + '/image/about.png'"
          overlay
        >
        </b-card>
      </b-col>
      <b-col md="6" class="py-3 py-md-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt repellat temporibus unde voluptate. Alias animi aspernatur atque blanditiis, commodi culpa delectus dicta distinctio doloremque dolores ducimus eos est id incidunt inventore, labore magni modi molestias necessitatibus nesciunt non odio officia quasi quis sequi similique sunt voluptas? Ad animi aperiam consectetur, consequatur cupiditate debitis delectus deleniti dignissimos dolorem dolores eius enim excepturi expedita fuga inventore ipsum itaque labore magni maiores modi natus nobis nulla perferendis perspiciatis quam quasi quo quos repudiandae sapiente ullam unde velit voluptatem, voluptatum. Autem deleniti distinctio excepturi, expedita, fugit illo laudantium mollitia odio optio quis quos reprehenderit sed sunt vero vitae. Alias culpa cum deleniti molestiae, nam, odit, officia quae quam quasi soluta tempora unde. Accusamus ad amet, culpa delectus dolor dolorum, esse est expedita facere hic impedit inventore itaque magnam maiores neque nesciunt odio odit provident quas quia sed sint totam? Eaque fugiat officia vel.</p>
        <div id="btn3"><button>Read More...</button></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
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