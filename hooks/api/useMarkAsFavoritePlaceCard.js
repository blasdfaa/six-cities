// Так как карточки будут использоваться в массиве и с другим ключом для запроса, нужна другая логика
// Проще вынести в отдельный хук
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleFavoritePlace } from 'api/place';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';

const useMarkAsFavoritePlaceCard = (queryKey) => {
  const router = useRouter();
  const { isLogged } = useAuth();
  const queryClient = useQueryClient();

  const handleMutation = (id, action) => {
    if (!isLogged) {
      return router.push('/login');
    }

    toggleFavoritePlace(id, action);
  };

  return useMutation(({ id, action }) => handleMutation(id, action), {
    // После успешного запроса обновляем только ключ который изменился
    onSuccess: (data) => {
      const currentPlaces = queryClient.getQueryData(queryKey);

      const newPlaces = currentPlaces.map((place) => {
        if (place.id === data.id) {
          return {
            ...place,
            is_favorite: data.is_favorite,
          };
        }

        return place;
      });

      queryClient.setQueryData(queryKey, newPlaces);
    },
  });
};

export default useMarkAsFavoritePlaceCard;
