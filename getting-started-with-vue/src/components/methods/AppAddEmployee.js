export default async function addEmployee(employee) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(employee),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })

    const data = await response.json()
    this.employees = [ ...this.employees, data ]
  } catch (error) {
    console.error(error)
  }
}