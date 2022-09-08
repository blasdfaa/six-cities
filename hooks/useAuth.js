import { useCookie } from 'react-use';

const NEXT_PUBLIC_AUTH_COOKIE_NAME = process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME;

// Так-как нет доступа к бэкэнду для установки защищенных кук, будет очень простая проверка на логин
// Если токен есть - мы авторизованы, если нет - не авторизованы
const useAuth = () => {
  const [token, setToken, deleteCookie] = useCookie(NEXT_PUBLIC_AUTH_COOKIE_NAME);

  return { setToken, token, removeToken: deleteCookie, isLogged: Boolean(token) };
};

export default useAuth;
