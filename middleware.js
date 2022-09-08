import { NextResponse } from 'next/server';
import { APP_ROUTE } from 'utils/constants';

const NEXT_PUBLIC_AUTH_COOKIE_NAME = process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME;

export const middleware = (req) => {
  const authCookie = req.cookies.get(NEXT_PUBLIC_AUTH_COOKIE_NAME);

  const isLoginPageFollow = req.nextUrl.pathname.startsWith(APP_ROUTE.login);
  const isFavoritePageFollow = req.nextUrl.pathname.startsWith(APP_ROUTE.favorite);

  // Если есть токен и пользователь хочет зайти на страницу логина
  if (authCookie && isLoginPageFollow) {
    return NextResponse.redirect(new URL(APP_ROUTE.home, req.url));
  }

  // Если нет токена и пользователь хочет зайти на страницу избранных отелей
  if (!authCookie && isFavoritePageFollow) {
    return NextResponse.redirect(new URL(APP_ROUTE.login, req.url));
  }
};
