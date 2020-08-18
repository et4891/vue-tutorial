<template>
  <div id="employee-form">
    <form @submit.prevent='handleSubmit'>

      <!-- form fields -->
      <label for="">Employee Name</label>
      <input
        ref='first'
        v-model='employee.name'
        type="text"
				:class="{ 'has-error': submitting && invalidName }"
				@focus="clearStatus"
				@keypress="clearStatus"
      />

      <label for="">Employee Email</label>
      <input
        v-model='employee.email'
        type="text"
				:class="{ 'has-error': submitting && invalidEmail }"
				@focus="clearStatus"
      />

      <!-- error handle -->
      <p
        v-if="error && submitting"
        class="error-message"
      >
        ❗Please fill out all required fields
      </p>
      <p
        v-if="success"
        class="success-message"
      >
        ✅ Employee successfully added
      </p>

			<!-- submit button -->
      <button>Add Employee</button>
    </form>
  </div>
</template>


<script>
import EmployeeFormMethods from './methods/EmployeeForm.js';

export default {
  name: "employee-form",
  data() {
    return {
			submitting: false,
			error: false,
			success: false,
      employee: {
        name: "",
        email: ""
      }
    };
  },
  methods: EmployeeFormMethods,
  computed: {
    invalidName(){
      return this.employee.name === '';
    },
    invalidEmail(){
      return this.employee.email === '';
    },
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>
