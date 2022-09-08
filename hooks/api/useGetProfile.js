import { useQuery } from '@tanstack/react-query';
import { getProfile } from 'api/user';
import useAuth from 'hooks/useAuth';

const useGetProfile = () => {
  const { token, removeToken } = useAuth();

  return useQuery(['profile'], () => getProfile(token), {
    retry: false,
    onError: (error) => {
      if (error.response.status === 401) {
        removeToken();
      }
    },
  });
};

export default useGetProfile;
