<template>
 <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center" width="100%">
        <caption class="pa-2 font-weight-regular">Question No: {{getQuestionNo}}</caption>
        <caption class="font-weight-regular">Score: {{getScore}}</caption> 
      </div>
       <v-spacer></v-spacer>
       <router-link to="/"> <v-btn
        elevation="1"
        outlined
        color:primary
        >Log Out</v-btn>
        </router-link>
    </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default{
computed:{
  ...mapState(["score","questionNo"]),
  getScore(){
    return this.score
  },
  getQuestionNo(){
    return this.questionNo
  }
}
}
</script>