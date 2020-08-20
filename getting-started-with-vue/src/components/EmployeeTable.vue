<template>
  <div id="employee-table">
    <p v-if="!employees.length" class="empty-table">
      No Employees
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Employee name</th>
          <th>Employee email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="employee in employees"
          :key="employee.id"
        >
          <!-- name editing or displaying -->
          <td v-if="editing === employee.id">
            <input type="text" v-model="employee.name"/>
          </td>
          <td v-else>{{employee.name}}</td>

          <!-- email editing or displaying -->
          <td v-if="editing === employee.id">
            <input type="text" v-model="employee.email"/>
          </td>
          <td v-else>{{employee.email}}</td>

          <td v-if="editing === employee.id">
            <button @click="editEmployee(employee)">Save</button>
            <button class="muted-button" @click="cancelEdit(employee)">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(employee)">Edit</button>
            <button @click="$emit('delete:employee', employee.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  import EmployeeTableMethods from './methods/EmployeeTable';

  export default {
    name: 'EmployeeTable',
    props: {
      employees: Array
    },
    data() {
      return {
        editing: null,
      }
    },
    methods: EmployeeTableMethods,
  };
</script>

<style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
</style>