import axios from 'axios';

const BASE_API = 'https://opentdb.com/api.php?amount=15&category=18&difficulty=easy&type=multiple';

export default {
  list: () => axios.get(BASE_API),
}