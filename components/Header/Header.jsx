import Container from 'components/Container';
import HeaderNavigation from 'components/HeaderNavigation/HeaderNavigation';
import usePage from 'hooks/usePage';
import Image from 'next/image';

import * as S from './style';

const Header = () => {
  const { isLoginPage } = usePage();

  return (
    <header>
      <Container>
        <S.Root>
          <S.Left>
            <S.LogoLink href="/">
              <Image src="/img/logo.svg" width={81} height={41} alt="6 cities logo" />
            </S.LogoLink>
          </S.Left>

          {!isLoginPage && <HeaderNavigation />}
        </S.Root>
      </Container>
    </header>
  );
};

export default Header;
