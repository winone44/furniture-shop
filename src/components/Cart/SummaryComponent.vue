<template>
<div>
  <b-card-body>
    <ul class="list-group list-group-flush">
      <li
          class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
        Products
        <span>{{totalProducts.toFixed(2)}} zł</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center px-0">
        Shipping
        <span v-if="$store.getters.hasShippingFee">100 zł</span>
        <span v-else>Gratis</span>
      </li>
      <li
          class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
        <div>
          <strong>Total amount</strong>
          <strong>
            <p class="mb-0">(including VAT)</p>
          </strong>
        </div>
        <span><strong>{{totalPrice.toFixed(2)}} zł</strong></span>
      </li>
    </ul>

    <b-button variant="primary" class="btn-lg btn-block">
      Go to checkout
    </b-button>
  </b-card-body>
</div>
</template>

<script>
export default {
  name: "SummaryComponent",
  computed: {
    totalProducts() {
      return this.$store.getters.totalProducts;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    }
  }
}
</script>

<style scoped>

</style>