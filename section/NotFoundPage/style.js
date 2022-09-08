import styled from '@emotion/styled';
import Link from 'next/link';

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ErrorCode = styled.div`
  position: absolute;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;

  h1 {
    pointer-events: none;
    color: #e6e6e6;
    font-weight: 900;
    font-size: 276px;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Title = styled.h2`
  font-size: 46px;
  color: #000;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
`;

export const PageText = styled.p`
  font-size: 16px;
  color: #000;
  font-weight: 400;
  text-transform: uppercase;
  margin: 15px 0 30px;
`;

export const BackLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  padding: 16px 38px;
  border: 2px solid transparent;
  font-weight: 400;
  transition: 0.2s all;
  color: #fff;
  background-color: #4481c3;

  &:hover,
  &:focus {
    background-color: #fff;
    border-color: #4481c3;
    color: #4481c3;
  }
`;
