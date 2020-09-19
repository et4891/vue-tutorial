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
    reset() {
      this.todoText = null;
    },
    todoInput(e) {
      this.todoText = e.target.value;
    },
    onReset() {
      this.reset();
    },
    onAdd() {
      this.$emit('onAddEmit', this.todoText);
      this.reset();
    }
  }
}
</script>

<style scoped>
  .input-group {
    margin: 20px 0;
  }
</style>
