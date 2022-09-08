import styled from '@emotion/styled';
import { default as _Image } from 'next/image';

import Container from '../../../components/Container';

export const Wrapper = styled(Container)`
  padding-left: 52px;
  padding-right: 52px;
`;

export const Root = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  width: 786px;
  margin-right: auto;
  margin-left: auto;
  max-height: 452px;
  margin-bottom: 30px;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -1px;
    width: 34px;
    height: 100%;
    background-image: url(/img/triangle.svg);
    background-repeat: no-repeat;
    background-size: 34px 452px;
  }

  &::before {
    left: 0;
    transform: rotate(180deg);
    z-index: 1;
  }

  &::after {
    right: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  margin-right: 2px;
  width: 260px;
  height: 200px;
  overflow: hidden;
`;

export const Image = styled(_Image)`
  display: block;
  min-width: 100%;
  min-height: 100%;
  flex-grow: 1;
`;
