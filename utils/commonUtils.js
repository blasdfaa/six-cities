export const getPlaceType = (type) => {
  return {
    apartment: 'Apartment',
    room: 'Private Room',
    house: 'House',
    hotel: 'Hotel',
  }[type];
};
