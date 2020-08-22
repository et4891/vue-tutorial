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
          :class="{ selected: selectedIndex === index }"
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
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    submitAnswer() {
      const isCorrect = (this.selectedIndex === this.correctAnswerIndex);
      this.answered = true;
      this.increment(isCorrect);
    },
  },
  computed: {
    correctAnswer() {
      return this.currentQuestion.correct_answer;
    },
    answers() {
      return this.$helpers.shuffle([ ...this.currentQuestion.incorrect_answers, this.correctAnswer ]);
    },
    correctAnswerIndex() {
      return this.answers.indexOf(this.correctAnswer);
    }
  }
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
  }

  .incorrect {
    background-color: indianred;
  }

  .btn {
    margin: 0 5px;
  }
</style>