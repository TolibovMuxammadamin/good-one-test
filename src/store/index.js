import Vue from 'vue'
import Vuex from 'vuex'
import categories from "@/assets/data/categories";
import products from "@/assets/data/products";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageInnerWidth: 0,
    categories,
    categoryId: 1,
    products
  },
  getters: {
    pageInnerWidth: state => state.pageInnerWidth,
    categories: state => state.categories,
    categoryId: state => state.categoryId,
    products: state => {
      let prods = [];

      if (state.categoryId === 1)
        prods = state.products;
      else {
        prods = [];
        products.forEach(pr => {
          if (pr.categoryId === state.categoryId)
            prods.push(pr);
        })
      }

      return prods;
    }
  },
  mutations: {
    setPageInnerWidth: (state, innerWidth) => (state.pageInnerWidth = innerWidth),
    setCategoryId: (state, categoryId) => (state.categoryId = categoryId)
  },
  actions: {
  },
  modules: {
  }
})
