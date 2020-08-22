export default {
  correctAnswer() {
    return this.currentQuestion.correct_answer;
  },
  answers() {
    return this.$helpers.shuffle([ ...this.currentQuestion.incorrect_answers, this.correctAnswer ]);
  },
  correctAnswerIndex() {
    return this.answers.indexOf(this.correctAnswer);
  },
};