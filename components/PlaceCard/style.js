import styled from '@emotion/styled';
import FavoriteButton from 'components/FavoriteButton/FavoriteButton';
import StarRating from 'components/StarRating/StarRating';

export const Body = styled.article`
  position: relative;

  &:hover {
    opacity: 0.6;
  }
`;

Body.Common = styled(Body)`
  width: 260px;
  margin-left: 8px;
  margin-bottom: 24px;
`;

Body.Favorite = styled(Body)`
  display: flex;
  align-items: flex-start;
  width: 421px;
  margin-bottom: 32px;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 9px;
`;

ImageWrapper.Favorite = styled(ImageWrapper)`
  max-width: 150px;
  margin-right: 16px;
  margin-bottom: 0;
`;

export const Image = styled.div`
  display: block;
  border-radius: 4px;
  font-size: 0;
  overflow: hidden;
`;

export const Info = styled.div`
  flex-grow: 1;
`;

Info.Favorite = styled(Info)`
  padding-top: 1px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Price = styled.div`
  margin-right: 20px;
`;

export const PriceValue = styled.b`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
`;

export const PriceText = styled.span`
  font-size: 12px;
  line-height: 1.1667;
`;

export const FavoriteBtn = styled(FavoriteButton)`
  flex-shrink: 0;
  width: 18px;
  height: 19px;
  margin-top: 2px;
`;

export const Rating = styled(StarRating)`
  margin-bottom: 6px;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 1.223;
  font-weight: 700;
  font-style: oblique;
`;

export const Type = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 1.1667;
`;
