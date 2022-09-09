import LocationTab from 'components/LocationTab/LocationTab';
import PlaceCard from 'components/PlaceCard/PlaceCard';
import useGetFavoritesPlaces from 'hooks/api/useGetFavoritesPlaces';
import useMarkAsFavoritePlaceCard from 'hooks/api/useMarkAsFavoritePlaceCard';
import React from 'react';
import VisuallyHidden from 'shared/visuallyHidden';
import { HOTEL_CATEGORIES } from 'utils/constants';

import * as S from './style';

const Main = () => {
  const favoritePlaces = useGetFavoritesPlaces();
  const toggleFavorite = useMarkAsFavoritePlaceCard(['places', 'favorites'], { revalidate: true });

  const allCategories = Object.values(HOTEL_CATEGORIES);
  const isEmptyFavorites = favoritePlaces.data.length === 0;

  return (
    <S.Root>
      <S.Wrapper>
        {!isEmptyFavorites && (
          <S.Section>
            <S.Title>Saved listing</S.Title>

            <S.List>
              {allCategories.map((category) => {
                // Получить список отелей по каждой категории
                const places = favoritePlaces.data.filter((place) => place.city.name === category);

                // Категории у которых нет отелей показывать не надо
                if (!places.length) {
                  return null;
                }

                return (
                  <S.Item key={category}>
                    <S.Location>
                      <LocationTab active>{category}</LocationTab>
                    </S.Location>

                    <div>
                      {places.map((place) => (
                        <PlaceCard
                          data={place}
                          key={place.id}
                          variant="favorite"
                          onToggleFavorite={toggleFavorite.mutate}
                        />
                      ))}
                    </div>
                  </S.Item>
                );
              })}
            </S.List>
          </S.Section>
        )}

        {isEmptyFavorites && <EmptyMessage />}
      </S.Wrapper>
    </S.Root>
  );
};

const EmptyMessage = () => (
  <S.EmptySection>
    <VisuallyHidden as="h1">Favorites (empty)</VisuallyHidden>

    <S.EmptyWrapper>
      <S.EmptyStatus>Nothing yet saved.</S.EmptyStatus>
      <S.EmptyStatusDescription>
        Save properties to narrow down search or plan your future trips.
      </S.EmptyStatusDescription>
    </S.EmptyWrapper>
  </S.EmptySection>
);

export default Main;
