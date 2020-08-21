<template>
  <div>
    <b-nav>
      <b-nav-item disabled><strong>Fancy Quiz App</strong></b-nav-item>
      <b-nav-item disabled>Counter: {{ counter }} / {{ totalQuestions }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      counter: {
        type: Number
      },
      totalQuestions: {
        type: Number
      },
    }
  };
</script>

<style scoped>

</style>