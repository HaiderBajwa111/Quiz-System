<template>
    <div class="d-flex flex-column fill-height">
    <quizheader></quizheader>
    <div class="d-flex align-center justify-center fill-height">
    <transition>
   <questionBox></questionBox>
    </transition>
    </div>
    <div>
   <mainfooter></mainfooter>
    </div>
    </div>
</template>
<script>
import questionBox from '../components/questionBox'
import mainfooter from "../components/mainfooter"
import quizheader from '../components/quizheader'
export default{
  components:{
    questionBox,
    mainfooter,
    quizheader
  }
 
}

</script>
  