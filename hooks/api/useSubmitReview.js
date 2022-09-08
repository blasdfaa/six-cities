import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitReview } from 'api/user';
import { useRouter } from 'next/router';

const useSubmitReview = () => {
  const { query } = useRouter();
  const queryClient = useQueryClient();

  const commentsQueryKey = ['place', query.id, 'reviews'];

  return useMutation((newReviews) => submitReview(query.id, newReviews), {
    // Отменить все исходящие повторные запросы для отзывов (чтобы они не перезаписывали наше оптимистичное обновление)
    onMutate: async () => {
      await queryClient.cancelQueries(commentsQueryKey);

      const previousReviews = queryClient.getQueryData(commentsQueryKey);

      return { previousReviews };
    },
    // Если мутация завершилась неудачей, используем контекст, возвращенный из onMutate, для отката
    onError: (_err, _variables, context) => {
      if (context?.previousReviews) {
        queryClient.setQueryData(commentsQueryKey, context.previousReviews);
      }
    },
    // После успешного сабмита устанавливаем новое состояние отзывов (в ответ придёт список обновлённых отзывов)
    onSuccess: (data, _variables, context) => {
      if (context?.previousReviews) {
        queryClient.setQueryData(commentsQueryKey, data);
      }
    },
  });
};

export default useSubmitReview;
