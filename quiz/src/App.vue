<template>
  <div id="app">
    <Header
      :numCorrect="numCorrect"
      :totalQuestions="this.totalQuestions"
    />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="8" offset="2">
          <QuizBox
            v-if="this.questions.length"
            :currentQuestion="this.questions[this.index]"
            :goToNextQuestion="this.goToNextQuestion"
            :totalQuestions="this.totalQuestions"
            :questionNumber="this.index + 1"
            :increment="this.increment"
          />
          <div v-else>
            <img src="https://mobile-realty.s3-us-west-2.amazonaws.com/loading-0.gif" alt="">
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header';
import QuizBox from './components/QuizBox';

import AppMethods from './methods/App';
import AppComputed from './computed/App';


export default {
  name: 'App',
  components: {
    Header,
    QuizBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
    };
  },
  methods: AppMethods,
  computed: AppComputed,
  mounted() {
    this.getQuiz();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
