<template>
  <div class="quiz-question-container">
    <b-jumbotron>
      <template v-slot:lead>
        <div v-html="currentQuestion.question"></div>
      </template>

      <hr class="my-4">

      <p>
        <Answers
          :incorrectAnswers="this.currentQuestion.incorrect_answers"
          :correctAnswer="this.currentQuestion.correct_answer"
          :success="this.success"
          @is-correct="emitIsCorrect"
        />
      </p>

      <b-button
        class="float-left"
        variant="primary"
        @click.prevent="onSubmit"
        :disabled="this.submitted"
      >
        Submit
      </b-button>
      <b-button
        class="float-right"
        variant="success"
        href="#"
        @click="this.goToNextQuestion"
        :disabled="questionNumber === totalQuestions">
        Next
      </b-button>
      <p>{{ questionNumber }} / {{ totalQuestions }}</p>
    </b-jumbotron>
  </div>
</template>

<script>
import Answers from './Answers';

export default {
  name: 'QuizBox',
  components: {
    Answers,
  },
  props: {
    currentQuestion: {
      type: Object,
    },
    totalQuestions: {
      type: Number
    },
    questionNumber: {
      type: Number
    },
  },
  data () {
    return {
      isCorrect: false,
      success: false,
      submitted: false,
    }
  },
  methods: {
    onSubmit(){
      // console.log(this.isCorrect, 'is correct in quiz box');
      this.submitted = true;
      this.success = this.isCorrect;
      this.$emit('correct-answer', this.success);
    },
    emitIsCorrect(boo){
      this.isCorrect = boo;
    },
    goToNextQuestion(){
      this.$emit('next-question');
      this.submitted = false;
    }
  },
};
</script>

<style scoped>

</style>