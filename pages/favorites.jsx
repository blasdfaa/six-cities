import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getFavoritesPlaces } from 'api/place';
import Footer from 'components/Footer/Footer';
import Main from 'section/favoritesPage/Main/Main';
import { parseCookieToken } from 'utils/commonUtils';

const FavoritesPage = () => {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();

  const token = parseCookieToken(req.headers.cookie);

  try {
    // Важно использовать `fetchQuery`, так-как нам нужно проверить данные и в случае неудачи вернуть 404
    // `prefetchQuery` не возвращает ничего!
    const data = await queryClient.fetchQuery(['places', 'favorites'], () => getFavoritesPlaces(token));

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    console.error('error: ', error);

    return {
      notFound: true,
    };
  }
};

export default FavoritesPage;
