import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleFavoritePlace } from 'api/place';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';

const useMarkAsFavoritePlace = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isLogged } = useAuth();

  const placeId = router.query.id;
  const placeQueryKey = ['place', placeId];

  const handleMutation = (action) => {
    if (!isLogged) {
      return router.push('/login');
    }

    return toggleFavoritePlace(placeId, action); // Важно вернуть промис из функции!
  };

  return useMutation(handleMutation, {
    // После успешного запроса обновляем только ключ который изменился
    onSuccess: (data) => {
      const currentPlace = queryClient.getQueryData(placeQueryKey);

      queryClient.setQueryData(placeQueryKey, { ...currentPlace, is_favorite: data.is_favorite });
    },
  });
};

export default useMarkAsFavoritePlace;
