import { HOTEL_CATEGORIES, SORT_TYPE } from './constants';

export const getPlaceType = (type) => {
  return {
    apartment: 'Apartment',
    room: 'Private Room',
    house: 'House',
    hotel: 'Hotel',
  }[type];
};

// Так-как нету доступа к бэку, куку надо распарсить отдельно на сервере
export const parseCookieToken = (cookie) => {
  return cookie && cookie.split('token=')[1];
};

export const getPlaceCategories = () => {
  return Object.entries(HOTEL_CATEGORIES).reduce((acc, [id, name]) => [...acc, { id, name }], []);
};

export const sortPlacesByType = (type, places = []) => {
  const items = [...places];

  return {
    [SORT_TYPE.popular]: () => items,
    [SORT_TYPE.popularToLow]: () => items.sort((a, b) => b.price - a.price),
    [SORT_TYPE.priceToHigh]: () => items.sort((a, b) => a.price - b.price),
    [SORT_TYPE.topRateFirst]: () => items.sort((a, b) => b.rating - a.rating),
  }[type]();
};
