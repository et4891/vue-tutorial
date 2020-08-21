<template>
  <div id="app">
    <Header
      :counter="this.counter"
      :totalQuestions="this.questions.length"
    />
    <b-container class="bv-example-row" v-if="this.questions.length">
      <b-row>
        <b-col sm="8" offset="2">
          <QuizBox
            :currentQuestion="this.questions[this.index]"
            :goToNextQuestion="this.goToNextQuestion"
            :totalQuestions="this.questions.length"
            :questionNumber="this.index + 1"
            @correct-answer="this.setCounter"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header';
import QuizBox from './components/QuizBox';

import QuizApi from './apis/Quiz';


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
      counter: 0,
    };
  },
  methods: {
    async getQuiz() {
      try {
        const response = await QuizApi.list();
        this.questions = response.data.results;
      } catch (e) {
        console.log(e, 'error at getQuiz in app.vue');
      }
    },
    goToNextQuestion() {
      this.index++;
    },
    setCounter(boo) {
      if (boo) this.counter++;
    }
  },
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
