<template>
  <div id="app" class="small-container">
    <h1>Employee</h1>

    <employee-form @add:employee='addEmployee' />
    <employee-table :employees='employees' />
  </div>
</template>

<script>
import EmployeeTable from "./components/EmployeeTable.vue";
import EmployeeForm from "./components/EmployeeForm.vue";

export default {
  name: "App",
  components: {
    EmployeeTable,
    EmployeeForm
  },
  data() {
    return {
      employees: []
    };
  },
  methods: {
    addEmployee(employee){
      // since id start with 1, if there's no employees, start id with 1, else check length of array and increase by 1
      const lastId = (this.employees.length > 0) ? this.employees.length : 1;
      const newEmployee = {...employee, id: lastId + 1};
      this.employees = [...this.employees, newEmployee];
    }
  }
};
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
