import PlaceCard from 'components/PlaceCard/PlaceCard';
import Select from 'components/Select/Select';
import useMarkAsFavoritePlaceCard from 'hooks/api/useMarkAsFavoritePlaceCard';
import React from 'react';
import VisuallyHidden from 'shared/visuallyHidden';
import { sortPlacesByType } from 'utils/commonUtils';
import { SORT_TYPE } from 'utils/constants';

import * as S from './style';

const sortItems = Object.entries(SORT_TYPE).reduce((acc, [id, label]) => [...acc, { id, label }], []);

const PlacesList = ({ places = [], category }) => {
  const [currentSortType, setCurrentSortType] = React.useState(sortItems[0]);

  const toggleFavorite = useMarkAsFavoritePlaceCard(['places']);

  const sortedPlaces = sortPlacesByType(currentSortType.label, places);

  return (
    <S.Root>
      <VisuallyHidden as="h2">Places</VisuallyHidden>

      <S.PlacesFound>
        {places.length} places to stay in {category}
      </S.PlacesFound>

      <Select options={sortItems} value={currentSortType.label} onSelect={setCurrentSortType} />

      <S.List>
        {sortedPlaces.map((place) => (
          <PlaceCard data={place} key={place.id} onToggleFavorite={toggleFavorite.mutate} />
        ))}
      </S.List>
    </S.Root>
  );
};

export default PlacesList;
