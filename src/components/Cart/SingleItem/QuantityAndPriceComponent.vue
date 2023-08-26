<template>
  <div>
    <div class="d-flex mb-4" style="max-width: 300px">
      <button class="btn btn-primary px-3 me-2"
              @click="quantity--">
        <b-icon icon="dash" />
      </button>

      <div class="form-outline">
        <input id="form1" min="0" v-model="quantity" name="quantity" type="number" class="form-control" />
        <label class="form-label" for="form1">Quantity</label>
      </div>

      <button class="btn btn-primary px-3 ms-2"
              @click="quantity++">
        <b-icon icon="plus" />
      </button>
    </div>
    <p class="text-start text-md-center">
      <strong>{{ price }} zł</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "QuantityComponent",
  props: {
    price: String,
  },
  data() {
    return {
      quantity: 1
    }
  }
}
</script>

<style scoped>

</style>