import axios from 'axios';

export const apiInterface = axios.create({
  baseURL: `http://${import.meta.env.VITE_API}`,
});
