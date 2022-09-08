import StarRating from 'components/StarRating/StarRating';
import useGetCommentsByPlaceId from 'hooks/api/useGetCommentsByPlaceId';
import { fDate } from 'utils/formatTime';

import * as S from './style';

const ReviewsList = () => {
  const { data } = useGetCommentsByPlaceId();

  return (
    <S.List>
      {data.map(({ id, user, rating, comment, date }) => (
        <S.Item key={id}>
          <S.User>
            <S.UserAvatar>
              <S.Avatar src={user.avatar_url} width={54} height={54} alt={user.name} />
            </S.UserAvatar>

            <S.UserName>{user.name}</S.UserName>
          </S.User>

          <div>
            <S.Rating>
              <StarRating size="medium" value={rating} readOnly />
            </S.Rating>

            <S.Text>{comment}</S.Text>

            <S.Date>{fDate(date)}</S.Date>
          </div>
        </S.Item>
      ))}
    </S.List>
  );
};

export default ReviewsList;
