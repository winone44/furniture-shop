<template>
  <div>
    <div class="d-flex mb-4" style="max-width: 300px">
      <button class="btn btn-primary px-3 me-2"
              @click="quantityChange(-1)">
        <b-icon icon="dash" />
      </button>

      <div class="form-outline">
        <input id="form1" min="0" v-model="quantity" name="quantity" type="number" class="form-control" />
        <label class="form-label" for="form1">Quantity</label>
      </div>

      <button class="btn btn-primary px-3 ms-2"
              @click="quantityChange(1)">
        <b-icon icon="plus" />
      </button>
    </div>
    <p class="text-start text-md-center">
      <strong>{{ (price * stock).toFixed(2) }} zł</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "QuantityComponent",
  props: {
    shopIdItem: [String, Number],
    price: String,
    stock: [String, Number]
  },
  data() {
    return {
      quantity: 1
    }
  },
  created() {
    this.quantity = this.stock
  },
  methods: {
    quantityChange(crement) {

      if (crement === 1) {
        this.$store.dispatch('incrementStock', this.shopIdItem)
        this.quantity += crement;
      } else if (this.quantity > 0) {
        this.$store.dispatch('decrementStock', this.shopIdItem)
        this.quantity += crement;
      }

    }
  }
}
</script>

<style scoped>

</style>