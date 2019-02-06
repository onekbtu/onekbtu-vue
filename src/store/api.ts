import axios from 'axios';


export default axios.create({
  // baseURL: 'http://34.73.243.118/api',
  baseURL: 'http://0.0.0.0:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
