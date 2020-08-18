<template>
  <div id="employee-form">
    <form @submit.prevent='handleSubmit'>
      <label for="">Employee Name</label>
      <input
        v-model='employee.name'
        type="text"
      />
      <label for="">Employee Email</label>
      <input
        v-model='employee.email'
        type="text"
      />
      <button>Add Employee</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "employee-form",
  data() {
    return {
      employee: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      const { name, email } = this.employee;
      console.log(name, "name");
      console.log(email, "email");
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>
