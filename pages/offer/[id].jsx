import styled from '@emotion/styled';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getPlaceById } from 'api/place';
import Head from 'next/head';
import Property from 'section/offer/Property/Property';
import { parseCookieToken } from 'utils/commonUtils';

const OfferPage = () => {
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

      <Root>
        <Property />
      </Root>
    </>
  );
};

const Root = styled.main`
  padding-bottom: 129px;
`;

export const getServerSideProps = async ({ req, params }) => {
  const queryClient = new QueryClient();

  const token = parseCookieToken(req.headers.cookie);

  try {
    // Важно использовать `fetchQuery`, так-как нам нужно проверить данные и в случае неудачи вернуть 404
    // `prefetchQuery` не возвращает ничего!
    const data = await queryClient.fetchQuery(['place', params?.id], () =>
      getPlaceById({ id: params?.id, token }),
    );

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

export default OfferPage;
