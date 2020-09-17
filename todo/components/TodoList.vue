<template>
  <div>
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
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

</style>
