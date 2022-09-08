import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  margin-bottom: 38px;
  margin-left: -64px;
`;

const Item = styled.li`
  margin-left: 64px;
  padding-left: 18px;
  font-size: 16px;
  line-height: 1.3;
  background-repeat: no-repeat;
`;

export const Bedroom = styled(Item)`
  background-image: url(/img/ico-bedrooms.svg);
  background-size: 14px 18px;
`;

export const Type = styled(Item)`
  background-image: url(/img/ico-place.svg);
  background-size: 13px 16px;
`;

export const Adults = styled(Item)`
  background-image: url(/img/ico-adults.svg);
  background-size: 13px 12px;
  background-position: left 3px;
`;
