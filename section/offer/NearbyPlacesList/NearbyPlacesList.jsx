import Container from 'components/Container';
import useGetNearbyPlaces from 'hooks/api/useGetNearbyPlaces';
import useMarkAsFavoritePlaceCard from 'hooks/api/useMarkAsFavoritePlaceCard';
import { useRouter } from 'next/router';

import * as S from './style';

const NearbyPlacesList = () => {
  const { query } = useRouter();

  const { isSuccess, data } = useGetNearbyPlaces();
  const toggleFavorite = useMarkAsFavoritePlaceCard(['places', query.id, 'nearby']);

  return (
    <Container>
      <S.Section>
        <S.Title>Other places in the neighbourhood</S.Title>

        {isSuccess && (
          <S.CardsList>
            {data.map((place) => (
              <S.Place key={place.id} data={place} onToggleFavorite={toggleFavorite.mutate} />
            ))}
          </S.CardsList>
        )}
      </S.Section>
    </Container>
  );
};

export default NearbyPlacesList;
