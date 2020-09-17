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
      const lastId = this.todos[this.todos.length - 1].id;
      const newTodo = {
        completed: false,
        id: lastId + 1,
        value,
      }
      this.todos = [ ...this.todos, newTodo ];
    }
  }
}
</script>

<style scoped>

</style>
