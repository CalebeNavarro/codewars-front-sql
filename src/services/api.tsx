import axios from 'axios';

const api = axios.create({
  baseURL: "https://www.codewars.com/api/v1/users",
});

export default api;