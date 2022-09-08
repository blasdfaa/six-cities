import axios from 'lib/axios';

export const getProfile = async (token) => {
  const { data } = await axios.get('/login', { headers: { 'x-token': token } });

  return data;
};

export const requireLogin = async (credentials) => {
  const { data } = await axios.post('/login', credentials);

  return data;
};

export const submitReview = async (id, review) => {
  const { data } = await axios.post(`/comments/${id}`, review);

  return data;
};
