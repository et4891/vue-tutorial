<template>
  <tr>
    <td>
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="'checkbox-' + todo.id"
          @click="onCheck"
          :checked="todo.completed"
        >
        <label
          class="custom-control-label"
          :class="{ isCompleted: todo.completed }"
          :for="'checkbox-' + todo.id"
        >
          {{ todo.value }}
        </label>
      </div>
    </td>
    <td>
      <button class="btn btn-sm btn-danger float-right">X</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['todo'],
  methods: {
    onCheck() {
      this.todo.completed = !this.todo.completed;
    }
  }
}
</script>

<style scoped>
  .isCompleted {
    text-decoration: line-through;
  }
</style>
