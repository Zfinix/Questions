
<template>
  <v-app id="inspire">
   
     <router-view > </router-view>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      drawer: null,
      bottomNav: 'home',
    }),
    props: {
      source: String
    },
    methods: {
  
  },
  }
</script>