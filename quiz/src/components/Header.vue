<template>
  <div>
    <b-nav>
      <b-nav-item disabled><strong>Fancy Quiz App</strong></b-nav-item>
      <b-nav-item disabled>Correct: {{ numCorrect }} / {{ totalQuestions }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: [
      'numCorrect',
      'totalQuestions',
    ],
  };
</script>

<style scoped>

</style>