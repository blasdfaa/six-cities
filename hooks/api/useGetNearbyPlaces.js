import { useQuery } from '@tanstack/react-query';
import { getNearbyPlacesById } from 'api/place';
import { useRouter } from 'next/router';

const useGetNearbyPlaces = () => {
  const { query } = useRouter();

  return useQuery(['places', query.id, 'nearby'], () => getNearbyPlacesById(query.id));
};

export default useGetNearbyPlaces;
