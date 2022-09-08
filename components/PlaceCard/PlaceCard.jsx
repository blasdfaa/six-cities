import Image from 'next/image';
import Link from 'next/link';
import { getPlaceType } from 'utils/commonUtils';

import * as S from './style';

const PlaceCard = ({ data, className, onToggleFavorite }) => {
  const { id, preview_image, title, type, price, is_favorite, rating } = data;

  const toggleFavoriteAction = is_favorite ? 'remove' : 'add';

  return (
    <S.Body className={className}>
      <S.ImageWrapper>
        <Link href={`/offer/${id}`}>
          <S.Image>
            <Image src={preview_image} width={260} height={200} alt={title} />
          </S.Image>
        </Link>
      </S.ImageWrapper>

      <S.Info>
        <S.PriceWrapper>
          <S.Price>
            <S.PriceValue>€ {price}</S.PriceValue>
            <S.PriceText>/&nbsp;night</S.PriceText>
          </S.Price>

          <S.FavoriteBtn
            size="small"
            active={is_favorite}
            onClick={() => onToggleFavorite({ id, action: toggleFavoriteAction })}
          />
        </S.PriceWrapper>

        <S.Rating value={rating} size="small" readOnly />

        <S.Title>
          <Link href={`/offer/${id}`}>{title}</Link>
        </S.Title>

        <S.Type>{getPlaceType(type)}</S.Type>
      </S.Info>
    </S.Body>
  );
};

export default PlaceCard;
