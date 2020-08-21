import axios from 'axios';

const BASE_API = 'https://opentdb.com/api.php?amount=10&type=multiple';

export default {
  list: () => axios.get(BASE_API),
}