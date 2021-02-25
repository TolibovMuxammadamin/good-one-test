<template>
  <div>
    <div class="category-wrapper">
      <category-card v-for="category in categories"
                     :key="category.id"
                     :category="category"
                     :active="category.id === categoryId"
                     @click.native="setCategoryId(category.id)"
      />
    </div>

    <div class="product-wrapper">
      <product-card v-for="product in products"
                    :key="product.id"
                    :product="product" />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
export default {
  name: 'Home',
  components: {ProductCard, CategoryCard},
  methods: {
    ...mapMutations([
        'setCategoryId'
    ])
  },
  computed: {
    ...mapGetters([
        'categories',
        'products',
        'categoryId'
    ])
  }
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

  .product-wrapper {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
</style>