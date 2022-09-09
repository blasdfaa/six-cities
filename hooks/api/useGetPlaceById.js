import { useQuery } from '@tanstack/react-query';
import { getPlaceById } from 'api/place';
import { useRouter } from 'next/router';

const useGetPlaceById = (token) => {
  const { query } = useRouter();

  return useQuery(['place', query.id], () => getPlaceById({ id: query.id, token }));
};

export default useGetPlaceById;
