export default function editEmployee(id, updatedEmployee) {
  this.employees = this.employees.map(employee =>
    employee.id === id ? updatedEmployee : employee
  )
}