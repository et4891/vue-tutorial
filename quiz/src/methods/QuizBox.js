export default {
  selectAnswer(index) {
    this.selectedIndex = index;
  },
  submitAnswer() {
    const isCorrect = (this.selectedIndex === this.correctAnswerIndex);
    this.answered = true;
    this.increment(isCorrect);
  },
  answerItemClass(index) {
    /*
   * Three cases
   * 1.  add class 'selected' to which item is selected
   * 2.  add class 'correct' if is answered, and correctAnswerIndex is the same as index
   * 3.  add class 'incorrect' if is answered is true, and both selectedIndex and correctAnswerIndex is the same as index
   * For the 3rd case, if selectedIndex === index is not added, all other items will added with 'incorrect' class
   *  */
    let result = '';

    if (this.selectedIndex === index) result = 'selected';
    if ((this.answered) &&
      (this.correctAnswerIndex === index)
    ) result = 'correct';
    if ((this.answered) &&
      (this.selectedIndex === index) &&
      (this.correctAnswerIndex !== index)
    ) result = 'incorrect';

    return result;
  },
};