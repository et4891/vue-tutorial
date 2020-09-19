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
import TodoApi from '../api/Todo';

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
        const response = await TodoApi.create({ item });
        this.todos = [ ...this.todos, response.data.data ];
      } catch (e) {
        console.log(e, 'error in App onAdd');
      }
    },
    async onRemove(id) {
      try {
        const response = await TodoApi.remove(id);
        if(response.data.status){
          this.todos = this.todos.filter(todo => todo._id !== id);
        }
      } catch (e) {
          console.log(e, 'App onRemove error');
      }
    },
  },
  async created() {
    try {
      const response = await TodoApi.list();
      this.todos = response.data.data;
    } catch (e) {
      console.log(e, 'error in App create');
    }
  }
}
</script>

<style scoped>

</style>
