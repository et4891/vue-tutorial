<template>
  <tr>
    <td>
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="'checkbox-' + todoId"
          @click="onCheck"
          :checked="todo.completed"
        >
        <label
          class="custom-control-label clickable"
          :class="{ isCompleted: todo.completed }"
          :for="'checkbox-' + todoId"
        >
          {{ todo.item }}
        </label>
      </div>
    </td>
    <td>
      <button class="btn btn-sm btn-outline-danger float-right" @click.prevent="onRemove">X</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['todo'],
  computed: {
    todoId() {
      return this.todo.id || this.todo._id;
    }
  },
  methods: {
    onCheck() {
      this.todo.completed = !this.todo.completed;
    },
    onRemove() {
      this.$emit('onRemoveEmit', this.todoId);
    }
  }
}
</script>

<style scoped>
  .isCompleted {
    text-decoration: line-through;
  }

  .clickable {
    cursor: pointer !important;
  }
</style>
