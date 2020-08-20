export default function cancelEdit(employee) {
  Object.assign(employee, this.cachedEmployee);
  this.editing = null;
}