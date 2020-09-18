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
import axios from 'axios';

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export default {
  name: 'App',
  data() {
    return {
      todos: [
        { id: 1, item: 'complete todo', completed: false },
        { id: 2, item: 'testing', completed: true },
      ]
    }
  },
  components: {
    TodoInput,
    TodoList
  },
  methods: {
    async onAdd(value) {
      try {

//          const response = await axios.post('http://localhost:3001/api/todo');
//          this.todos = [ ...this.todos, newTodo ];
      } catch (e) {
          console.log(e, 'error in App onAdd');
      }
    },
    onRemove(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  },
  async created() {
      try {
          const response = await axios.get('http://localhost:3001/api/todo');
          this.todos = response.data.data;
      } catch (e) {
          console.log(e, 'error in App create');
      }
  }
}
</script>

<style scoped>

</style>
