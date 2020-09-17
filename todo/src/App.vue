<template>
  <div class="container">
    <TodoInput
      @onAddEmit="onAdd"
    />
    <TodoList
      :todos="todos"
      @onRemoveEmit="onRemove"
    />
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
      const lastId = this.todos[this.todos.length - 1];
      const newTodo = {
        completed: false,
        id: (lastId) ? lastId.id + 1 : 1,
        value,
      }
      this.todos = [ ...this.todos, newTodo ];
    },
    onRemove(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  }
}
</script>

<style scoped>

</style>
