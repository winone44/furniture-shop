<template>
<div>
  <b-row>
    <b-col lg="3" class="col-md-12 mb-4 mb-lg-0">
      <ImageComponent
          :imageUrl="imageUrl"
      />
    </b-col>
    <b-col lg="5" class="col-md-6 mb-4 mb-lg-0">
      <DataComponent
          :color="color"
          :title="title"
          :shopIdItem="shopIdItem"
      />
    </b-col>
    <b-col lg="4" class="col-md-6 mb-4 mb-lg-0">
      <QuantityAndPriceComponent
          :shopIdItem="shopIdItem"
          :stock="stock"
          :price="price"
      />
    </b-col>
  </b-row>

  <hr class="my-4" />
</div>


</template>

<script>
import ImageComponent from "@/components/Cart/SingleItem/ImageComponent";
import DataComponent from "@/components/Cart/SingleItem/DataComponent";
import QuantityAndPriceComponent from "@/components/Cart/SingleItem/QuantityAndPriceComponent";


export default {
  name: "SingleItemComponent",
  components: {QuantityAndPriceComponent, DataComponent, ImageComponent},
  props: {
    shopIdItem: [String, Number],
    imageUrl: String,
    color: String,
    title: String,
    price: String,
    stock: [String, Number]
  }
}
</script>

<style scoped>

</style>