import styled from '@emotion/styled';
import PlaceCard from 'components/PlaceCard/PlaceCard';

export const Section = styled.section`
  margin: 0 16px 0 12px;
  padding-bottom: 27px;
  border-bottom: 2px solid rgba(222, 222, 222, 0.5);
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 25px;
  font-size: 24px;
  line-height: 1.1667;
  font-weight: 700;
  font-style: oblique;
  text-align: center;
  color: #000;
`;

export const CardsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: -8px;
  padding-left: 3px;
`;

export const Place = styled(PlaceCard)`
  width: 260px;
  margin-left: 8px;
  margin-bottom: 24px;
`;
