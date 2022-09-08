import styled from '@emotion/styled';
import Container from 'components/Container';
import FavoriteButton from 'components/FavoriteButton/FavoriteButton';

export const Wrapper = styled(Container)`
  position: relative;
  overflow-x: hidden;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 613px;
  margin-right: auto;
  margin-left: auto;
`;

export const Name = styled.h1`
  margin-top: 0;
  margin-bottom: 7px;
  padding: 0 28px;
  font-size: 38px;
  line-height: 1.21053;
  font-weight: 700;
  font-style: oblique;
  text-align: center;
`;

export const Rating = styled.div`
  margin-bottom: 24px;
`;

export const AddToFavoriteBtn = styled(FavoriteButton)`
  position: absolute;
  top: 41px;
  right: 93px;
  width: 31px;
  height: 33px;
  margin-top: 2px;
`;
