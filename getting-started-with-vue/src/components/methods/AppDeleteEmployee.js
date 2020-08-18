export default function deleteEmployee(id) {
  this.employees = this.employees.filter(employee => employee.id !== id);
}