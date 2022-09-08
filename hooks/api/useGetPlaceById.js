import { useQuery } from '@tanstack/react-query';
import { getPlaceById } from 'api/place';
import { useRouter } from 'next/router';

const useGetPlaceById = () => {
  const { query } = useRouter();

  return useQuery(['place', query.id], () => getPlaceById(query.id));
};

export default useGetPlaceById;
