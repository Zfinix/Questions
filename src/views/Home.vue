<template>

   <!-- <v-container class= "bg"  fluid grid-list-xl pa-a>
    <v-layout  row justify-space-around mt-5>
     <v-flex pt-3 xs6> 
      <v-card >
       <v-card-title>
        <h3 >Dispatch</h3>
           </v-card-title>

                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm6 md8>
                        <v-text-field  label=" Name"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field  label="Matric No"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md8>
                        <v-select :items="['CHEM 122', 'CHEM 112', 'ENGR 102', 'GSP 102', 'MATH 122', 'PHY 124', 'PHY 116']" label="Course"
                          required></v-select>
                      </v-flex>

                      <v-flex xs12 sm6 md4>
                        <v-select :items="['No', 'Yes']" label="Submitted" required></v-select>
                      </v-flex>

                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat >Cancel</v-btn>
                  <v-btn color="blue darken-1" flat >Save</v-btn>
                </v-card-actions>
              </v-card>
       </v-flex>
     </v-layout>
   </v-container> -->
   <v-container justify-center fluid grid-list-xl >
     <v-layout wrap row justify-space-around pa-5>
       <v-layout wrap row justify-space-around pa-> <h2 >Questions</h2> </v-layout>
  
       <span pa-4 >
         Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally forbade hundred to. 

         Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners. 

        Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any. 

        On recommend tolerably my belonging or am.
       </span>
      
      <v-layout wrap row justify-space-around pa-5>
         <v-btn color="green"  style= "color: white" to="/questions"  >Start</v-btn>
      </v-layout>

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

