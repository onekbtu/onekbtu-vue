import axios from 'axios';


export default axios.create({
  baseURL: 'https://nurlashko.zharaskhan.com/api',
  // baseURL: 'http://0.0.0.0:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
