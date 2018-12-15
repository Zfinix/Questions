<template>

   
   <v-container justify-center fluid grid-list-xl >
     <v-layout wrap column justify-center pa-5>
       <v-layout wrap row justify-space-around pa-2> <h2 >Form Submitted Successfully</h2> </v-layout>
         <v-layout wrap row justify-space-around pa-3> <span > Your answers were submitted successfully</span></v-layout>
     </v-layout>
   </v-container>

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
<style>
.bg{
   /* background: #fd746c; fallback for old browsers 
background: -webkit-linear-gradient(to right, #ff9068, #fd746c);
background: linear-gradient(to right, #ff9068, #fd746c); 

background: #485563;  
background: -webkit-linear-gradient(to right, #29323c, #485563);
background: linear-gradient(to right, #29323c, #485563);
 */

background: #7b4397;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #dc2430, #7b4397);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #dc2430, #7b4397); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>

