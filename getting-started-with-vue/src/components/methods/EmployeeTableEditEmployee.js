export default function editEmployee(employee) {
  if (employee.name === '' || employee.email === '') return;
  this.$emit('edit:employee', employee.id, employee);
  this.editing = null;
}