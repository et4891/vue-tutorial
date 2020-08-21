<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" placeholder="Add Todo...">
      <button class="btn">Submit</button>
    </form>
  </div>
</template>

<script>
  import TodoApi from '../apis/Todo';

  export default {
    name: 'AddTodo',
    data() {
      return {
        title: '',
      }
    },
    methods: {
      async addTodo(){
        try {
          const newTodo = {
            title: this.title,
            completed: false,
          };

          const response = await TodoApi.add(newTodo);

          // Send event up to parent
          this.$emit('add-todo', response.data);
          this.title = '';
        } catch (e) {
          console.log(e, 'error inside add to do, addtodo.vue');
        }
      }
    }
  };
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>