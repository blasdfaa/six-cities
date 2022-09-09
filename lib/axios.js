import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME);

  if (token) {
    config.headers['x-token'] = token;
  }

  return config;
});

export default instance;
