import { BASE_URL, DEFAULT_AXIOS_TIMEOUT } from '@/settings';
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_AXIOS_TIMEOUT,
  withCredentials: true,
  headers: {
    accept: 'application/json',
  },
});

export default instance;
