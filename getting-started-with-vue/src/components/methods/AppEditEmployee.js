export default async function editEmployee(id, updatedEmployee) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ id }`, {
      method: 'PUT',
      body: JSON.stringify(updatedEmployee),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data = await response.json()
    this.employees = this.employees.map(employee => (employee.id === id
      ? data
      : employee))
  } catch (error) {
    console.error(error)
  }
}