export default function addEmployee(employee) {
  // since id start with 1, if there's no employees, start id with 1, else check length of array and increase by 1
  const lastId = (this.employees.length > 0) ? this.employees.length : 0;
  const newEmployee = {...employee, id: lastId + 1};
  this.employees = [...this.employees, newEmployee];
}