import axios from 'axios';

const BASE_URL = 'http://localhost:3001';
export default {
    list: () => axios.get(`${BASE_URL}/todo`),
    create: () => axios.post(`${BASE_URL}/todo`),
}