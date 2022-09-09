import { css } from '@emotion/react';
import styled from '@emotion/styled';
import usePage from 'hooks/usePage';

import Header from './Header/Header';

const Layout = ({ children, gray = false }) => {
  const { isLoginPage } = usePage();

  return (
    <Root gray={gray} login={isLoginPage}>
      <Header />
      {children}
    </Root>
  );
};

const loginPageStyles = css`
  width: 1144px;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(to right, #f5f5f5 509px, transparent 509px), url(/img/amsterdam.jpg);
  background-position: top left, right top;
  height: 100vh;
  background-size: auto, auto 100%;
  background-repeat: no-repeat, no-repeat;
  overflow: hidden;

  @media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {
    background-image: linear-gradient(to right, #f5f5f5 509px, transparent 509px), url(/img/amsterdam@2x.jpg);
  }

  @media (max-height: 720px) {
    background-size: auto, auto 715px;
  }
`;

const Root = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  background-color: #fff;
  height: 100%;

  ${({ login }) => login && loginPageStyles};
  ${({ gray }) =>
    gray &&
    css`
      background-color: #f5f5f5;
    `};
`;

export default Layout;
