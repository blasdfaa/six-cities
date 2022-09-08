import { css } from '@emotion/react';
import styled from '@emotion/styled';

const starsBackgroundStyles = (img, width, height) => css`
  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    background: url(${img}) transparent no-repeat center;
    width: ${width}px;
    background-size: ${width}px ${height}px;
  }
`;

export const Root = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Stars = styled.div`
  position: relative;
  display: block;
  font-size: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ width, height }) => starsBackgroundStyles('/img/stars.svg', width, height)};
`;

export const Fill = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 100%;
  overflow: hidden;

  ${({ width, height }) => starsBackgroundStyles('/img/stars-active.svg', width, height)};
`;

export const ValueCounter = styled.span`
  margin-left: 5px;
  padding-top: 2px;
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  font-style: oblique;
`;
