import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requireLogout } from 'api/user';
import useGetProfile from 'hooks/api/useGetProfile';
import useAuth from 'hooks/useAuth';
import { APP_ROUTE } from 'utils/constants';

import * as S from './style';

const HeaderNavigation = () => {
  const { data, isSuccess, isLoading } = useGetProfile();

  return (
    <S.Navigation>
      <S.NavList>
        {isLoading && <S.Loader height={25} width={200} />}

        {!isSuccess && !isLoading && <UnauthorizedItem />}

        {isSuccess && <AuthorizedItem user={data} />}
      </S.NavList>
    </S.Navigation>
  );
};

const UnauthorizedItem = () => (
  <S.NavItem>
    <S.NavLink href={APP_ROUTE.login}>
      <S.Avatar />

      <S.Login>Sign in</S.Login>
    </S.NavLink>
  </S.NavItem>
);

const AuthorizedItem = ({ user }) => {
  const { removeToken } = useAuth();
  const queryClient = useQueryClient();

  const logout = useMutation(requireLogout, {
    onSuccess: () => {
      removeToken();

      queryClient.invalidateQueries(['profile']);
      queryClient.invalidateQueries(['places']);
    },
  });

  return (
    <>
      <S.NavItem>
        <S.NavLink href={APP_ROUTE.favorite}>
          <S.Avatar css={{ backgroundImage: `url(${user.avatar_url})` }} />

          <S.UserName>{user.name}</S.UserName>
        </S.NavLink>
      </S.NavItem>

      <S.NavItem>
        <S.LogoutButton type="button" onClick={logout.mutate}>
          <S.LogoutButtonText>Sign out</S.LogoutButtonText>
        </S.LogoutButton>
      </S.NavItem>
    </>
  );
};

export default HeaderNavigation;
