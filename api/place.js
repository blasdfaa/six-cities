import axios from 'lib/axios';

export const getPlaceById = async ({ id, token }) => {
  try {
    const { data } = await axios.get(`/hotels/${id}`, { headers: token ? { 'x-token': token } : undefined });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPlaceCommentsById = async (id) => {
  try {
    const { data } = await axios.get(`/comments/${id}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getNearbyPlacesById = async (id) => {
  try {
    const { data } = await axios.get(`/hotels/${id}/nearby`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFavoritesPlaces = async (token) => {
  try {
    const { data } = await axios.get('/favorite', { headers: token ? { 'x-token': token } : undefined });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const toggleFavoritePlace = async (id, action) => {
  if (!(action === 'add' || action === 'remove')) {
    throw new Error('invalid place favorite action, available actions: "add" | "remove"');
  }

  const toggleAction = action === 'add' ? 1 : 0;

  try {
    const { data } = await axios.post(`/favorite/${id}/${toggleAction}`);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPlaces = async (token) => {
  try {
    const { data } = await axios.get('/hotels', { headers: token ? { 'x-token': token } : undefined });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
