import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { APP_ROUTE } from 'utils/constants';

const Footer = () => {
  return (
    <Root>
      <LogoLink href={APP_ROUTE.home}>
        <Image src="/img/logo.svg" width={64} height={33} alt="6 cities logo" />
      </LogoLink>
    </Root>
  );
};

const Root = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 48px;
  padding-bottom: 52px;
`;

const LogoLink = styled(Link)`
  &:hover {
    opacity: 0.5;
  }
`;

export default Footer;
