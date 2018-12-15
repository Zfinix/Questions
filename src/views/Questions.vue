<template>

     <v-container justify-center fluid grid-list-xl >
     <v-layout wrap column justify-space-around pa-5>
       <v-layout wrap row justify-space-around pa-5- mb-3> <h2 >My View of me</h2> </v-layout>
    <v-layout  pl-5 >
       <span>
         This part measures the extent to which you have the traits that make a great employee
       </span>
    </v-layout>
      <v-layout flex column justify-center px-5 >
        <span>Scoring</span>
       <span> 1). No, this is not me </span>
       <span> 2). Not quite me </span>
       <span> 3). Yeah, this is me </span>
      
      </v-layout>
  <v-container fluid grid-list-md>
       <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      content-class="flex column"
      row
      wrap  >
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm6
        md4
        lg3
      >
        <v-card flex column v-if="errors.length" style="background: red">

            <v-dialog  v-model="dialog" max-width="500px">
               <p >
                  <b>Please correct the following error(s):</b>
                   <ul>
                      <li v-for="error in errors" :key="error">{{ error }}</li>
                       </ul>
                        </p>
            </v-dialog>

          <v-content>
          <v-card-title><h4>Opps there is an error here</h4></v-card-title>
          <v-divider></v-divider>
          <v-list column>
              <v-layout flex column justify-center >
              <v-flex ma-5>
              <span style="color:white" class="align-center">{{props.item}}</span>
         <v-layout fluid column justify-center mt-5>
       
            <v-btn-toggle column >

            <v-flex xs4>
              <v-layout fluid column justify-center>
                <v-btn  color="info" style="color: white" value="1">
                   1
                </v-btn>
               </v-layout>
            </v-flex>
                  
            <v-flex xs4>
              <v-layout fluid column justify-center>
                <v-btn  color="success" style="color: white"   value="2">
                   2
                </v-btn>
              </v-layout>
            </v-flex>

            <v-flex  xs4>
              <v-layout fluid column justify-center>
                <v-btn   color="warning"  value="3">
                   3
                </v-btn>
              </v-layout>
            </v-flex>
           
         </v-btn-toggle>
         </v-layout>
              </v-flex>
              </v-layout>
            </v-list>
          </v-content>
        </v-card>
            
        <v-card flex column v-else>
          <v-content >
          <v-card-title><h4 >Question:  {{kex++}}</h4></v-card-title>
          <v-divider></v-divider>
          <v-list column>
              <v-layout flex column justify-center >
              <v-flex ma-5>
              <span  class="align-center">{{props.item}}</span>
         <v-layout fluid column justify-center mt-5>
       
            <v-btn-toggle column v-model="var1" :key="index">

            <v-flex xs4>
              <v-layout fluid column justify-center>
                <v-btn  color="info" style="color: white" value="1">
                   1
                </v-btn>
               </v-layout>
            </v-flex>
                  
            <v-flex xs4>
              <v-layout fluid column justify-center>
                <v-btn  color="success" style="color: white"   value="2">
                   2
                </v-btn>
              </v-layout>
            </v-flex>

            <v-flex  xs4>
              <v-layout fluid column justify-center>
                <v-btn   color="warning"  value="3">
                   3
                </v-btn>
              </v-layout>
            </v-flex>
           
         </v-btn-toggle>
         </v-layout>
              </v-flex>
              </v-layout>
            </v-list>
          </v-content>
        </v-card>
     </v-flex>
    </v-data-iterator>
 
    </v-container >

      <v-layout fluid justify-center t-5>
         <v-btn color="green"  style= "color: white"   @click="checkForm" >Submit</v-btn>
      </v-layout>

     </v-layout>
   </v-container>


</template>

<script>
import axios from "axios";

import router from 'vue-router'

  export default {
    data: () => ({ 
      errors:[],
     rowsPerPageItems: [4, 3, 1],
      pagination: {
        rowsPerPage: 5
      },
      questionx: [],
      number:[],
      var1:null,
     errored: false,
     dialog: false,
      items: []
    }),

    props: {
      source: String
    },
  
   created() {
      this.initialize();
    },
    methods: {
        initialize() {
          var key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDAwMDAwMDMiLCJpYXQiOjE1MzM2NDQwOTMsImV4cCI6MTU2NTA5MzY5M30.oMv_mQN6mAAmAVrRAozC7Ytk3omAye9P_TQ8Xyg3VOE";
       //INITIALIZIING RECORD 
       axios({ headers:{ "x-access-token": key}, method: "GET", "url": "http://test.natterbase.com:3002/questions" }).then(result => {
        this.questionx = result.data;
      
      var keys = Object.keys(this.questionx.questions);
      
      for(var i=0;i < keys.length;i++){
        this.number = 1;
        
        var key = keys[i];
        this.kex = 1;
          
        this.items = this.questionx.questions;
           
            }
            console.log(result.data); 
             
            }, error => {
                console.error(error);
            });
      },

      checkForm: function (e) {
       
      if (this.var1 != null) {
        this.$router.push('/successful')
        
      }else if(this.errored = true) {
        this.errors  = null;
        this.errored = false;
        this.initialize();
      }else {
        this.errored = true;
      }

      this.errors = [];

      if (!this.var1) {
        this.errors.push('Answer required.');
      }else{
        this.$router.push('/successful')
      }
      e.preventDefault();
    }
  
  },
  }
</script>