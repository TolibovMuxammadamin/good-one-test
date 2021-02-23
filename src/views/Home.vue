<template>
  <div>
    <div class="category-wrapper">
      <div v-for="n in 5" class="category">All</div>
    </div>

    <div class="product-wrapper">
      <div v-for="n in 5" class="product">
        <div class="product__title">Bill gales</div>
        <div class="product__price">12 000 000</div>
        <v-progress-linear class="product__percent"
                           height="22"
                           rounded
                           value="75">
          <span class="white--text">70%</span>
        </v-progress-linear>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

}
</script>

<style scoped lang="scss">
  .category-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    //min-width: 100%;
    padding: 10px;
    overflow: hidden;
    overflow-x: auto;
  }
  .category {
    height: 140px;
    min-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #42A5F5;
    border-radius: 6px;
    font-size: 18px;

    &:not(:last-child) {
      margin-right: 14px;
    }
  }

  .product-wrapper {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }

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