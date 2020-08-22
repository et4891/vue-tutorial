import QuizApi from '../apis/Quiz';

export default {
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
  increment(isCorrect) {
    if (isCorrect) this.numCorrect++;
  },
};