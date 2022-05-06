import axios from 'axios';

const api_kenzie = axios.create({
  baseURL: "https://codewars-kenzie-sql.herokuapp.com/api/v1",
});

export default api_kenzie;