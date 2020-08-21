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
        />
      </p>

      <b-button variant="primary" href="#">Submit</b-button>
      <b-button
        variant="success"
        href="#"
        @click="goToNextQuestion"
        :disabled="questionNumber === totalQuestions">
        Next
      </b-button>
      <p class="text-right">{{ questionNumber }} / {{ totalQuestions }}</p>
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
    goToNextQuestion: {
      type: Function,
    },
    totalQuestions: {
      type: Number
    },
    questionNumber: {
      type: Number
    },
  }
};
</script>

<style scoped>

</style>