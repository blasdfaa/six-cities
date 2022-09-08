import styled from '@emotion/styled';
import Link from 'next/link';

export const Root = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 19px 16px 0;
  width: 100%;
`;

export const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  margin-right: auto;
`;

export const LogoLink = styled(Link)`
  margin-bottom: 15px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
