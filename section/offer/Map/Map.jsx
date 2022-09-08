import styled from '@emotion/styled';
import LeafletMap from 'components/LeafletMap/LeafletMap';
import useGetNearbyPlaces from 'hooks/api/useGetNearbyPlaces';
import useGetPlaceById from 'hooks/api/useGetPlaceById';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

const locationIcon = new L.Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [19.5, 27],
});

const currentLocationIcon = new L.Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [19.5, 27],
});

const Map = () => {
  const place = useGetPlaceById();
  const nearbyPlaces = useGetNearbyPlaces();

  const { city, location, id } = place.data;

  // Так получать маркеры в данном случае безопасно, так-как при рендере есть проверка на успешный ответ
  const nearbyPlacesMarkers = nearbyPlaces.data?.map(({ location, id }) => ({ ...location, id })) ?? [];
  const markers = [{ ...location, id }, ...nearbyPlacesMarkers];

  return (
    <Root center={[city.location.latitude, city.location.longitude]} zoom={city.location.zoom}>
      {nearbyPlaces.isSuccess &&
        markers.map(({ latitude, longitude, id: markerId }) => (
          <Marker
            position={[latitude, longitude]}
            key={markerId}
            icon={markerId === id ? currentLocationIcon : locationIcon}
          />
        ))}
    </Root>
  );
};

export const Root = styled(LeafletMap)`
  width: 100%;
  height: 579px;
  margin-bottom: 50px;
`;

export default Map;
