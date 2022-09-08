import { css } from '@emotion/react';
import styled from '@emotion/styled';

const blueVariantStyles = css`
  padding: 16px 20px 13px;
  color: #fff;
  background-color: #4481c3;
  border-radius: 3px;

  &:disabled {
    background-color: #c7c7c7;
  }
`;

export const Root = styled.button`
  padding: 0;
  background: 0 0;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  text-align: center;
  word-break: break-word;
  word-wrap: wrap;
  overflow-wrap: break-word;
  transition: color 0.3s, background-color 0.3s;
  outline: 0;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:hover,
  &:focus {
    background-color: #3069a6;
  }

  ${({ variant }) => variant === 'blue' && blueVariantStyles};
`;
