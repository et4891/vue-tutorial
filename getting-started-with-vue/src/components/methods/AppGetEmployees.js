export default async function getEmployees() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    this.employees = await response.json()
  } catch (error) {
    console.error(error)
  }
}