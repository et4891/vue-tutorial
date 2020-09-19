<template>
  <div class="table-responsive table-hover table-borderless table-sm">
    <table class="table">
      <tbody v-if="todos.length > 0">
        <TodoListItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @onRemoveEmit="onRemove"
        />
      </tbody>
      <tbody v-else>
        <tr><td class="text-center">No items YET</td></tr>
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
  methods: {
    onRemove(id) {
      this.$emit('onRemoveEmit', id);
    }
  }
}
</script>

<style scoped>
  .table {
    width: 90%;
    margin: auto;
  }
</style>
