import useGetPlaces from 'hooks/api/useGetPlaces';
import useSSR from 'hooks/useSSR';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { HOTEL_CATEGORIES } from 'utils/constants';

import PlacesList from '../PlacesList/PlacesList';
import * as S from './style';

const PlacesMap = dynamic(() => import('../PlacesMap/PlacesMap'), { ssr: false });

const DEFAULT_CATEGORY = HOTEL_CATEGORIES.paris;

const Places = () => {
  const { query } = useRouter();
  const { data } = useGetPlaces();
  const { isBrowser } = useSSR();

  const selectedCategory = HOTEL_CATEGORIES[query.category] ?? DEFAULT_CATEGORY;
  const places = data.filter((place) => place.city.name === selectedCategory);

  return (
    <S.Root>
      <S.Wrapper>
        <PlacesList places={places} category={selectedCategory} />

        {isBrowser && <PlacesMap places={places} />}
      </S.Wrapper>
    </S.Root>
  );
};

export default Places;
