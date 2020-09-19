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
import TodoAPI from '../api/Todo';

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export default {
  name: 'App',
  data() {
    return {
      todos: [],
    }
  },
  components: {
    TodoInput,
    TodoList
  },
  methods: {
    async onAdd(item) {
      try {
        const response = await TodoAPI.create({item});
         this.todos = [ ...this.todos, response.data.data ];
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
      const response = await TodoAPI.list();
      this.todos = response.data.data;
    } catch (e) {
      console.log(e, 'error in App create');
    }
  }
}
</script>

<style scoped>

</style>
