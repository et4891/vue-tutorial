import axios from 'axios';

const BASE_URL = 'https://express-tutorial-api.herokuapp.com';
const TODO_PATH = '/api/todo'

/*
 * NOTE: somehow axios version 20's delete method cannot pass data attribute so downgraded to 19.2
 * */
export default {
  list: () => axios.get(`${ BASE_URL }${TODO_PATH}`),
  create: todo => axios.post(`${ BASE_URL }${TODO_PATH}`, todo),
  completed: ({ _id, completed }) => axios.post(`${ BASE_URL }${TODO_PATH}/completed`, { _id, completed }),
  remove: _id => axios.delete(`${ BASE_URL }${ TODO_PATH }`, { data: { _id } }),
};
