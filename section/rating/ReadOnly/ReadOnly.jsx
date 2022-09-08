import useStarRating from 'hooks/useStarRating';
import VisuallyHidden from 'shared/visuallyHidden';

import * as S from './style';

const MAX_STARS_COUNT = 5;

const ReadOnly = ({ value }) => {
  const percentValue = Math.round((value / MAX_STARS_COUNT) * 100);

  const { width, height, showedCounter } = useStarRating();

  return (
    <S.Root>
      <S.Stars width={width} height={height}>
        <S.Fill width={width} height={height} css={{ width: `${percentValue}%` }} />
        <VisuallyHidden>Rating</VisuallyHidden>
      </S.Stars>

      {showedCounter && <S.ValueCounter>{value}</S.ValueCounter>}
    </S.Root>
  );
};

export default ReadOnly;
