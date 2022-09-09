import { useQuery } from '@tanstack/react-query';
import { getPlaces } from 'api/place';

const useGetPlaces = () => {
  return useQuery(['places'], getPlaces);
};

export default useGetPlaces;
