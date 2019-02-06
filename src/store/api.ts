import axios from 'axios';

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common.Authorization = token;
}

export default axios.create({
  // baseURL: 'http://34.73.243.118/api',
  baseURL: 'http://0.0.0.0:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
