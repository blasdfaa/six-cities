import 'react-loading-skeleton/dist/skeleton.css';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from 'components/Layout';
import { config } from 'lib/react-query-config';
import NextNProgress from 'nextjs-progressbar';
import React from 'react';
import { globalStyles } from 'shared/styles';

const cache = createCache({ key: 'next' });

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient(config));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={cache}>
          <NextNProgress color="#4481c3" height={2} />
          {globalStyles}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CacheProvider>
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
