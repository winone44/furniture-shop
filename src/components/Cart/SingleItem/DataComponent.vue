<template>
<div>
  <p><strong>{{ title }}</strong></p>
  <p>Color: {{ color }}</p>
  <p>Size: M</p>
  <b-button @click="deleteItem" variant="primary" class="btn-sm me-1 mr-2" data-mdb-toggle="tooltip"
          title="Remove item">
    <b-icon icon="trash" />
  </b-button>
  <b-button variant="danger" class="btn-sm mr-2" data-mdb-toggle="tooltip"
          title="Move to the wish list">
    <b-icon icon="heart" />
  </b-button>
</div>
</template>

<script>
export default {
  name: "DataComponent",
  props: {
    shopIdItem: [String, Number],
    color: String,
    title: String,
  },
  methods: {
    deleteItem() {
      this.$store.dispatch('removeItem', this.shopIdItem);
    }
  }
}
</script>

<style scoped>

</style>