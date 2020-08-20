export default function editMode(employee) {
  this.cachedEmployee = Object.assign({}, employee);
  this.editing = employee.id;
}