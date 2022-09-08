import * as S from './style';

const NotFoundPage = () => {
  return (
    <S.Main>
      <S.Wrapper>
        <S.ErrorCode>
          <h1>404</h1>
        </S.ErrorCode>

        <S.Title>WE ARE SORRY, PAGE NOT FOUND!</S.Title>

        <S.PageText>
          HE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY
          UNAVAILABLE.
        </S.PageText>

        <S.BackLink href="/">BACK TO HOMEPAGE</S.BackLink>
      </S.Wrapper>
    </S.Main>
  );
};

export default NotFoundPage;
