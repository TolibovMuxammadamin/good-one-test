<template>
  <div class="product">
    <div class="product__title">{{ product.name }}</div>
    <div class="product__price">{{ product.price }}</div>
    <v-progress-linear class="product__percent"
                       height="22"
                       rounded
                       value="75">
      <span class="white--text">{{ product.discount }}%</span>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  }
}
</script>

<style scoped lang="scss">
  .product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 140px;
    width: 250px;
    background-color: #fff;
    border-radius: 6px;
    padding: 10px;
    position: relative;
    &:not(:last-child) {
      margin-right: 14px;
      margin-bottom: 14px;
    }

    &__title {
      text-transform: capitalize;
      color: #000;
      font-weight: 400;
    }

    &__price {
      font-weight: 700;
    }

    &__percent {
      border-radius: 10px;
      position: absolute;
      right: -20%;
      top: 60px;
      width: 135px;
      transform: rotate(-90deg);
    }
  }
</style>