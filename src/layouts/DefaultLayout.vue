<template>
  <v-app v-resize="onResize" id="inspire">
    <v-navigation-drawer v-model="drawer"
                         width="30%"
                         right
                         app>
      <Sidebar />
    </v-navigation-drawer>

    <v-app-bar app
               dark
               flat
               color="blue">

      <v-toolbar-title class="text-uppercase font-weight-bold text-h4">Max</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-app-bar-nav-icon v-if="pageInnerWidth < 1264" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="blue darken-4">
      <div class="sub-nav">
        <router-link to="/" class="sub-nav__link">Home</router-link>
        <v-icon color="white">mdi-chevron-right</v-icon>
        <router-link to="/" class="sub-nav__link">Order</router-link>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Sidebar from "@/components/Sidebar";

export default {
  name: "DefaultLayout",
  components: {Sidebar},
  data: () => ({
    drawer: null,
  }),
  methods: {
    ...mapMutations([
        'setPageInnerWidth'
    ]),
    onResize () {
      this.setPageInnerWidth(window.innerWidth);
    }
  },
  computed: {
    ...mapGetters([
        'pageInnerWidth'
    ])
  },
  mounted() {
    this.onResize();
  }
}
</script>

<style scoped lang="scss">
  .sub-nav {
    height: 42px;
    background-color: #1976D2;
    //margin-top: 64px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    //@media (max-width: 960px) {
    //  margin-top: 56px;
    //}

    &__link {
      color: #fff;
      font-size: 14px;
      text-decoration: none;
    }
  }
</style>