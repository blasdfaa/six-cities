import { css } from '@emotion/react';
import styled from '@emotion/styled';
import usePage from 'hooks/usePage';

const Container = ({ children, sx = {}, className, ...props }) => {
  const { isLoginPage } = usePage();

  return (
    <Root css={sx} login={isLoginPage} className={className} {...props}>
      {children}
    </Root>
  );
};

const loginPageStyles = css`
  display: flex;
`;

const Root = styled.div`
  width: 1144px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 58px;
  padding-right: 58px;

  ${({ login }) => login && loginPageStyles};
`;

export default Container;
