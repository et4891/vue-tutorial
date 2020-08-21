<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="(answer, index) in this.shuffledAnswers"
        :key="index"
        @click="chosenAnswer(answer); selected = index"
        :class="{ active:index === selected, 'mark-green':(success && index === selected) }"
        v-html="answer"
      >
      </b-list-group-item>
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
    },
    success: {
      type: Boolean,
    },
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
      this.$emit('is-correct', this.isCorrect);
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
  .list-group-item.mark-green {
    background: #32a95d;
  }

  .list-group-item.mark-red {
    background: #ff0000;
  }
</style>
