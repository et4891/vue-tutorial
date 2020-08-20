<template>
  <div id="app">
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import TodoApi from './apis/Todo';
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    async getList() {
      try {
        const response = await TodoApi.list();
        this.todos = response.data;
      } catch (e) {
        console.log(e, 'error inside app.vue getList()');
      }
    }
  },
  mounted() {
    this.getList();
  }

};
</script>

<style>
</style>
