import { useRouter } from 'next/router';
import { APP_ROUTE } from 'utils/constants';

const usePage = () => {
  const { pathname } = useRouter();

  return {
    isHomePage: pathname === APP_ROUTE.home,
    isLoginPage: pathname === APP_ROUTE.login,
    isFavoritePage: pathname === APP_ROUTE.favorite,
    isPropertyPage: RegExp(/offer\/*/).test(pathname),
  };
};

export default usePage;
