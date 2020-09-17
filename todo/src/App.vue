<template>
  <div class="container">
    <TodoInput
      @onAddEmit="onAdd"
    />
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export default {
  name: 'App',
  data() {
    return {
      todos: [
        { id: 1, value: 'complete todo', completed: false },
        { id: 2, value: 'testing', completed: true },
      ]
    }
  },
  components: {
    TodoInput,
    TodoList
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
