import useGetCommentsByPlaceId from 'hooks/api/useGetCommentsByPlaceId';
import useAuth from 'hooks/useAuth';

import ReviewForm from '../ReviewForm/ReviewForm';
import ReviewsList from '../ReviewsList/ReviewsList';
import * as S from './style';

const Review = () => {
  const { data, isSuccess } = useGetCommentsByPlaceId();
  const { isLogged } = useAuth();

  return (
    <>
      {isSuccess ? (
        <S.Root>
          <S.Title>Reviews · {data.length}</S.Title>

          <ReviewsList />

          {isLogged && <ReviewForm />}
        </S.Root>
      ) : null}
    </>
  );
};

export default Review;
