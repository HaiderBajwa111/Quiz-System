<template>
  <div class="d-flex align-center justify-center flex-column fill-height" width="100%">
        <v-overlay :value="!currentQuestion">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
      ></v-progress-circular>
    </v-overlay>
  <v-card
    v-if="currentQuestion"
    width="65%"
    height="fit-content"
    elevation="2"
    class="rounded-xl overflow-hidden"
  >
    <v-container>
      <v-row>
        <v-col cols="12" class="pa-0">
          <div class="primary px-0">
            <v-card-title class="white--text font-weight-regular text-center">
              Questions
            </v-card-title>
          </div>
        </v-col>
        <v-col cols="12">
          <div>
            <v-card-text class="text-center pb-1" v-html="currentQuestion" />
          </div>
        </v-col>
        <v-col cols="12 pa-0">
          <div class="d-flex justify-center">
            <v-list>
              <v-list-item class="align-center" dense>
                <v-radio-group v-model="answer">
                  <v-radio
                    v-for="(ans, index) in shuffledanswers"
                    :key="index"
                    :label="ans"
                    :value="ans"
                  ></v-radio>
                </v-radio-group>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col cols="12 pt-0">
          <div d-flex class="d-flex justify-center">
            <v-btn
              color="primary"
              id="next"
              class="pa-2 ma-3 white--text class"
              @click="nextQuestion"
              :disabled="questionCompleted || !isAnswered"
            >
              Next
            </v-btn>
            <v-btn color="primary" 
            class="pa-2 ma-3 white--text"
            @click="submithandler"
            :disabled="isAnswered || !isSelected"
            >Submit</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      index: 0,
      answer: null,
      isAnswered: null,
      dialouge: false
    };
  },
  computed: {
    ...mapState(["Data"]),
    currentQuestion() {
      return this.Data[this.index]?.question;
    },
    Answers() {
      const que = this.Data[this.index];
      if (que) {
        return [...que?.incorrect_answers, que?.correct_answer];
      }

      return [];
    },
    shuffledanswers() {
      const answers = this.Answers;

      for (var i = answers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;
      }

      return answers;
    },
        questionCompleted(){
          if(this.index >= 9){
              return true
          }
          else{
              return false
          }
      },
      isSelected(){
        if(this.answer!==null){
          return true
        }
        else{
          return false
        }
      }
  },
  methods:{
      nextQuestion(){
          this.isAnswered = false
          this.answer= null
          this.$store.dispatch("questionNo")
          return this.index++;
      },
      submithandler(){
          this.isAnswered = true
          this.isCorrect()
      },
      isCorrect(){
        if(this.answer==this.Data[this.index].correct_answer){
              this.$store.dispatch("addScore")
        }
      }
  },
  mounted(){
    this.$store.dispatch("clearData"),
    this.$store.dispatch("addData")
  },

};
</script>