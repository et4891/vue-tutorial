<template>
  <div class="quiz-question-container">
    <b-jumbotron>
      <template v-slot:lead>
        <div v-html="currentQuestion.question"></div>
      </template>

      <hr class="my-4">

      <b-list-group>
        <b-list-group-item
          v-for="(answer, index) in answers"
          v-html="answer"
          :key="index"
          :class="answerItemClass(index)"
          :disabled="answered"
          @click="selectAnswer(index)"
        >
        </b-list-group-item>
      </b-list-group>

      <b-button
        variant="primary"
        @click="submitAnswer"
        :disabled="(this.selectedIndex === null) || answered"
      >
        Submit
      </b-button>
      <b-button
        variant="success"
        @click="goToNextQuestion"
        :disabled="questionNumber === totalQuestions">
        Next
      </b-button>
      <p class="text-right">{{ questionNumber }} / {{ totalQuestions }}</p>
    </b-jumbotron>
  </div>
</template>

<script>
import QuizBoxMethods from '../methods/QuizBox';
import QuizBoxComputed from '../computed/QuizBox';

export default {
  name: 'QuizBox',
  components: {},
  props: {
    currentQuestion: {
      type: Object,
    },
    goToNextQuestion: {
      type: Function,
    },
    increment: {
      type: Function,
    },
    totalQuestions: {
      type: Number,
    },
    questionNumber: {
      type: Number,
    },
  },
  data() {
    return {
      selectedIndex: null,
      answered: false,
    };
  },
  watch: {
    /* listen to this prop, any changes the function will run
     * but this will not run on first load, if need to run on first load use below
     *
     * currentQuestion: {
     *   immediate: true,
     *   handler() {
     *     this.selectedIndex = null;
     *   }
     * }
     * */
    currentQuestion() {
      this.selectedIndex = null;
      this.answered = false;
    },
  },
  methods: QuizBoxMethods,
  computed: QuizBoxComputed,
};
</script>

<style scoped>
  .list-group {
    margin-bottom: 15px;
  }

  .selected,
  .list-group-item:hover{
    background-color: lightskyblue;
  }

  .correct {
    background-color: #42b983;
    color: #000;
  }

  .incorrect {
    background-color: indianred;
    color: #ffffff;
  }

  .btn {
    margin: 0 5px;
  }
</style>