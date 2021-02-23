<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #0a3679;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #90CAF9;
  transition: background 0.2s;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #42A5F5;
}
</style>