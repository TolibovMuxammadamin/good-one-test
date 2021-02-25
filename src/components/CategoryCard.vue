<template>
  <div class="category"
       :class="{ active }"
  >{{ category.name }}</div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    category: Object,
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
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
    cursor: pointer;
    transition: all 0.2s;

    &:not(:last-child) {
      margin-right: 14px;
    }
  }
  .category.active {
    color: #42A5F5;
    background-color: #fff;
  }
</style>