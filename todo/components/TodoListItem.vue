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
import TodoApi from '../api/Todo';

export default {
  name: 'TodoListItem',
  props: ['todo'],
  computed: {
    todoId() {
      return this.todo.id || this.todo._id;
    }
  },
  methods: {
    async onCheck() {
      try {
        const response = await TodoApi.completed({
          _id: this.todoId,
          completed: !this.todo.completed,
        });
        console.log(response, 'responseresponseresponseresponse');
        this.todo.completed = !this.todo.completed;
      } catch (e) {
        console.log(e, 'todolistitem oncheck');
      }
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
