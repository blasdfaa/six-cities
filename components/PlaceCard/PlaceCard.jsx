import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getPlaceType } from 'utils/commonUtils';

import * as S from './style';

const CARD_VARIANT = {
  common: 'common',
  favorite: 'favorite',
};

const PlaceCardContext = React.createContext({});

const PlaceCard = ({ data, className, onToggleFavorite = () => {}, variant = CARD_VARIANT.common }) => {
  const toggleFavoriteAction = data.is_favorite ? 'remove' : 'add';

  return (
    <PlaceCardContext.Provider value={{ onToggleFavorite, data, toggleFavoriteAction }}>
      {variant === CARD_VARIANT.common && <Common className={className} />}
      {variant === CARD_VARIANT.favorite && <Favorite className={className} />}
    </PlaceCardContext.Provider>
  );
};

// Варианты карточек для удобства можно разнести по разным файлам.
// Пока их 2, удобнее держать их тут для простоты

const Favorite = ({ className }) => {
  const { data, toggleFavoriteAction, onToggleFavorite } = React.useContext(PlaceCardContext);

  const { id, preview_image, title, type, price, is_favorite, rating } = data;

  return (
    <S.Body.Favorite className={className}>
      <S.ImageWrapper.Favorite>
        <Link href={`/offer/${id}`}>
          <S.Image>
            <Image src={preview_image} width={260} height={200} alt={title} />
          </S.Image>
        </Link>
      </S.ImageWrapper.Favorite>

      <S.Info.Favorite>
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
      </S.Info.Favorite>
    </S.Body.Favorite>
  );
};

const Common = ({ className }) => {
  const { data, toggleFavoriteAction, onToggleFavorite } = React.useContext(PlaceCardContext);

  const { id, preview_image, title, type, price, is_favorite, rating } = data;

  return (
    <S.Body.Common className={className}>
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
    </S.Body.Common>
  );
};

export default PlaceCard;
