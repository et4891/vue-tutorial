<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo"/>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array
    }
  }
};
</script>

<style scoped>

</style>