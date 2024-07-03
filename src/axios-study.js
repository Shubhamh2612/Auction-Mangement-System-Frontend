import axios from 'axios';

const baseURL = 'https://auction-management-system-server.onrender.com/';

const instance = axios.create({
  baseURL: baseURL
});

export default instance;
export { baseURL };

