<template>
  <b-container class="py-5">
    <b-row class="d-flex justify-content-center my-4">
      <b-col md="8">
        <b-card
            class="mb-4"
            header-tag="header"
        >
          <template #header>
            <h5 class="mb-0">Cart - {{$store.state.cartItems.length}} items</h5>
          </template>
          <b-card-body>
            <SingleItemComponent
                v-for="cartItem in $store.state.cartItems"
                :key="cartItem.shopIdItem"
                :imageUrl="cartItem.imageUrl"
                :color="cartItem.color"
                :title="cartItem.title"
                :price="cartItem.price"
                :stock="cartItem.stock"
                :shopIdItem="cartItem.shopIdItem"
            />
          </b-card-body>
        </b-card>
        <b-card class="mb-4">
          <b-card-body>
            <ExpectedShippingDeliveryComponent />
          </b-card-body>
        </b-card>
        <b-card class="mb-4 mb-lg-0">
          <b-card-body>
            <CreditCardsInfoComponent />
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card
            class="mb-4"
            header-tag="header"
        >
          <template #header>
            <h5 class="mb-0">Summary</h5>
          </template>
          <SummaryComponent />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SingleItemComponent from "@/components/Cart/SingleItemComponent";
import ExpectedShippingDeliveryComponent from "@/components/Cart/ExpectedShippingDeliveryComponent";
import CreditCardsInfoComponent from "@/components/Cart/CreditCardsInfoComponent";
import SummaryComponent from "@/components/Cart/SummaryComponent";
export default {
  name: "CartComponent",
  components: {SummaryComponent, CreditCardsInfoComponent, ExpectedShippingDeliveryComponent, SingleItemComponent}
}
</script>

<style scoped>

</style>