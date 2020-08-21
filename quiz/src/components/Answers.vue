<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="(answer, index) in this.shuffledAnswers"
        :key="index"
        @click="chosenAnswer(answer); selected = index"
        :class="{active:index === selected}"
      >{{ answer }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Answers",
  props: {
    incorrectAnswers: {
      type: Array,
    },
    correctAnswer: {
      type: String,
    }
  },
  data () {
    return {
      isCorrect: false,
      selected: false,
    }
  },
  methods: {
    chosenAnswer(answer){
      this.isCorrect = (answer === this.correctAnswer);
    }
  },
  computed: {
    shuffledAnswers(){
      return this.$helpers.shuffle([...this.incorrectAnswers, this.correctAnswer])
    }
  }
}
</script>

<style scoped>

</style>
