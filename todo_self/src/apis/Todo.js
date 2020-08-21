import axios from 'axios';

const BASE_API = 'https://jsonplaceholder.typicode.com/todos/';

export default {
  list: (options = '') => axios.get(`${BASE_API}${options}`),
  add: item => axios.post(BASE_API, item),
}