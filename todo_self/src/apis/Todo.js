import axios from 'axios';

const BASE_API = 'https://jsonplaceholder.typicode.com/todos/';

export default {
  list: () => axios.get(BASE_API),
}