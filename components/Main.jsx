import { css } from '@emotion/react';
import styled from '@emotion/styled';
import usePage from 'hooks/usePage';

const Main = ({ children }) => {
  const { isLoginPage } = usePage();

  return <Root login={isLoginPage}>{children}</Root>;
};

const Root = styled.main`
  ${({ login }) => login && loginPageStyles};
`;

const loginPageStyles = css`
  display: flex;
  flex-grow: 1;
`;

export default Main;
