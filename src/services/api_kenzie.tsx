import axios from 'axios';

const api_kenzie = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1",
});

export default api_kenzie;