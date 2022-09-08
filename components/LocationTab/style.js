import { css } from '@emotion/react';
import styled from '@emotion/styled';

const activeStyles = css`
  text-shadow: 1px 0 0, 0.5px 0 0, -1px 0 0;
  color: #fff;
  background-color: #4481c3;
`;

export const Root = styled.a`
  display: block;
  padding: 9px 21px 6px 11px;
  font-size: 19px;
  line-height: 1.211;
  font-weight: 300;
  font-style: oblique;
  transform: skew(-15deg);
  border-radius: 3px;
  transition: background 0.3s, color 0.3s, text-shadow 0.3s;

  &:hover,
  &:focus {
    text-shadow: 1px 0 0, 0.5px 0 0, -1px 0 0;
  }

  ${({ active }) => active && activeStyles};
`;
