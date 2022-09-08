import { getPlaceType } from 'utils/commonUtils';

import * as S from './style';

const Features = ({ features }) => {
  const { type, bedrooms, max_adults } = features;

  return (
    <S.List>
      <S.Type>{getPlaceType(type)}</S.Type>

      <S.Bedroom>{bedrooms} Bedrooms</S.Bedroom>

      <S.Adults>Max {max_adults} adults</S.Adults>
    </S.List>
  );
};

export default Features;
