<template>
  <div :class="{ 'is-completed': todo.completed }">
    <p>
      <input type="checkbox" :checked="todo.completed" @change="markComplete">{{ todo.title }}
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
    markComplete(){
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.is-completed {
  text-decoration: line-through;
}
</style>