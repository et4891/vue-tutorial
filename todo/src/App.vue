<template>
  <div class="container">
    <TodoInput
      @onAddEmit="onAdd"
    />
  </div>
</template>

<script>
import TodoInput from '../components/TodoInput';

export default {
  name: 'App',
  data() {
    return {
      todosList: [
        { id: 1, value: 'complete todo', completed: false },
        { id: 2, value: 'testing', completed: false },
      ]
    }
  },
  components: {
    TodoInput
  },
  methods: {
    onAdd(value) {
      console.log(value, 'what is the value here?');
    }
  }
}
</script>

<style scoped>

</style>
