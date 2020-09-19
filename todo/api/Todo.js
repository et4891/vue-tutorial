import axios from 'axios';

const BASE_URL = 'http://localhost:3001';
const TODO_PATH = '/api/todo'
export default {
  list: () => axios.get(`${ BASE_URL }${TODO_PATH}`),
  create: todo => axios.post(`${ BASE_URL }${TODO_PATH}`, todo),
  completed: ({ _id, completed }) => axios.post(`${ BASE_URL }${TODO_PATH}/completed`, { _id, completed }),
  remove: _id => axios.delete(`${ BASE_URL }${ TODO_PATH }`, { data: { _id } }),
};
