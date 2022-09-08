import { useQuery } from '@tanstack/react-query';
import { getPlaceCommentsById } from 'api/place';
import { useRouter } from 'next/router';

const useGetCommentsByPlaceId = () => {
  const { query } = useRouter();

  return useQuery(['place', query.id, 'reviews'], () => getPlaceCommentsById(query.id));
};

export default useGetCommentsByPlaceId;
