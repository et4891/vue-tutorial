<template>
  <div class="todo-item" :class="{ 'is-complete': todo.completed }">
    <p>
      <input type="checkbox" :checked="todo.completed" @change="markComplete">{{ todo.title }}
      <span class="del" @click="$emit('delete-todo', todo.id)">X</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: {
        type: Object
      }
    },
    methods: {
      markComplete() {
        this.todo.completed = !this.todo.completed;
      }
    }
  };
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #e2bc45;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>