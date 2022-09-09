import { useQuery } from '@tanstack/react-query';
import { getFavoritesPlaces } from 'api/place';

const useGetFavoritesPlaces = () => {
  return useQuery(['places', 'favorites'], getFavoritesPlaces);
};

export default useGetFavoritesPlaces;
