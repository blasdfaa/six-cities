import { css } from '@emotion/react';
import styled from '@emotion/styled';
import usePage from 'hooks/usePage';

const Main = ({ children }) => {
  const { isLoginPage, isHomePage } = usePage();

  return (
    <Root login={isLoginPage} home={isHomePage}>
      {children}
    </Root>
  );
};

const loginPageStyles = css`
  display: flex;
  flex-grow: 1;
`;

const homePageStyles = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: hidden;
`;

const Root = styled.main`
  ${({ login }) => login && loginPageStyles};
  ${({ home }) => home && homePageStyles};
`;

export default Main;
