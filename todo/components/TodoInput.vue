<template>
  <div class="input-group">
    <input type="text" class="form-control" @input="todoInput" v-model="todoText">
    <div class="input-group-append" id="button-addon">
      <button class="btn btn-success" type="button" @click.prevent="onAdd">Add Item</button>
      <button class="btn btn-outline-warning" type="button" @click.prevent="onReset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      todoText: null,
    }
  },
  methods: {
    todoInput(e) {
      this.todoText = e.target.value;
    },
    onReset() {
      this.todoText = null;
    },
    onAdd() {
      this.$emit('onAddEmit', this.todoText);
    }
  }
}
</script>

<style scoped>
  .input-group {
    margin: 20px 0;
  }
</style>
