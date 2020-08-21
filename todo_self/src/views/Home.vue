<template>
  <div id="app">
    <AddTodo @add-todo="addTodo"/>
    <TodoList :todos="todos" @del-todo="deleteTodo"/>
  </div>
</template>

<script>
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
// import TodoApi from './apis/Todo';

export default {
  name: 'App',
  components: {
    AddTodo,
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
        // const response = await TodoApi.list();
        // this.todos = response.data;
        this.todos = [
          {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false
          },
          {
            userId: 1,
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: false
          },
          {
            userId: 1,
            id: 3,
            title: 'fugiat veniam minus',
            completed: false
          },
        ];
      } catch (e) {
        console.log(e, 'error inside app.vue getList()');
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      console.log(newTodo, 'newTodo at app');
      this.todos = [ ...this.todos, newTodo ];
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
