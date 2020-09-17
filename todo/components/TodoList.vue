<template>
  <div class="table-responsive table-hover table-borderless table-sm">
    <table class="table">
      <tbody>
        <TodoListItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem'

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoListItem
  },
}
</script>

<style scoped>
  .table {
    width: 90%;
    margin: auto;
  }
</style>
