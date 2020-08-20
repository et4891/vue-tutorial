<template>
  <div
    id="app"
    class="small-container"
  >
    <h1>Employee</h1>

    <employee-form @add:employee="addEmployee"/>
    <employee-table
      :employees="employees"
      @delete:employee="deleteEmployee"
      @edit:employee="editEmployee"
    />
  </div>
</template>

<script>
  import AppMethods from './components/methods/App';
  import EmployeeTable from './components/EmployeeTable.vue';
  import EmployeeForm from './components/EmployeeForm.vue';

  export default {
    name: 'App',
    components: {
      EmployeeTable,
      EmployeeForm
    },
    data() {
      return {
        employees: []
      };
    },
    methods: AppMethods,
    mounted() {
      this.getEmployees();
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
