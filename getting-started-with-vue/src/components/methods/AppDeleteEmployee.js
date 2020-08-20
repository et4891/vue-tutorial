export default async function deleteEmployee(id) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/users/${ id }`, {
      method: 'DELETE'
    });
    this.employees = this.employees.filter(employee => employee.id !== id);
  } catch (error) {
    console.error(error);
  }
}