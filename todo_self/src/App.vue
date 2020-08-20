<template>
  <div id="app">
    <Header />
    <TodoList :todos="todos" @del-todo="deleteTodo"/>
  </div>
</template>

<script>
  import Header from './components/layout/Header';
  import TodoList from './components/TodoList';
  import TodoApi from './apis/Todo';

  export default {
    name: 'App',
    components: {
      Header,
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
      },
      deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    },
    mounted() {
      this.getList();
    }
  };
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
