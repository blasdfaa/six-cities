import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getPlaces } from 'api/place';
import Main from 'components/Main';
import Tabs from 'components/Tabs/Tabs';
import Head from 'next/head';
import Places from 'section/indexPage/Places/Places';
import VisuallyHidden from 'shared/visuallyHidden';
import { parseCookieToken } from 'utils/commonUtils';

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
      </Head>

      <Main>
        <VisuallyHidden as="h1">Cities</VisuallyHidden>

        <Tabs />
        <Places />
      </Main>
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();

  const token = parseCookieToken(req.headers.cookie);

  try {
    // Важно использовать `fetchQuery`, так-как нам нужно проверить данные и в случае неудачи вернуть 404
    // `prefetchQuery` не возвращает ничего!
    const data = await queryClient.fetchQuery(['places'], () => getPlaces(token));

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

export default Home;
