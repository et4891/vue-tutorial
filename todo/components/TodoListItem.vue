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
          class="custom-control-label clickable"
          :class="{ isCompleted: todo.completed }"
          :for="'checkbox-' + todo.id"
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
  methods: {
    onCheck() {
      this.todo.completed = !this.todo.completed;
    },
    onRemove() {
      this.$emit('onRemoveEmit', this.todo.id);
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
