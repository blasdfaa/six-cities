import * as S from './style';

const Host = ({ host, description }) => {
  const { avatar_url, is_pro, name } = host;

  return (
    <div>
      <S.Title>Meet the host</S.Title>

      <S.User>
        <S.UserAvatarWrapper isPro={is_pro}>
          <S.UserImage src={`/${avatar_url}`} width={74} height={74} alt={name} />
        </S.UserAvatarWrapper>

        <S.UserName>{name}</S.UserName>

        <S.UserStatus>{is_pro ? 'Pro' : 'Common'}</S.UserStatus>
      </S.User>

      <S.Description>{description}</S.Description>
    </div>
  );
};

export default Host;
