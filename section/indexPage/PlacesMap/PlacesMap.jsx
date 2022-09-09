import styled from '@emotion/styled';
import L from 'leaflet';
import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const PLACE_MAP_ICON = new L.Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [19.5, 27],
});

const PLACE_MAP_ICON_ACTIVE = new L.Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [19.5, 27],
});

const PlacesMap = ({ places }) => {
  const [map, setMap] = React.useState(null);

  const city = places[0].city.location;

  React.useEffect(() => {
    if (map) {
      map.flyTo([city.latitude, city.longitude], city.zoom);
    }
  }, [city]);

  return (
    <Root>
      <Map center={[city.latitude, city.longitude]} zoom={city.zoom} ref={setMap} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {places.map(({ location, id: markerId }) => (
          <Marker
            position={[location.latitude, location.longitude]}
            key={markerId}
            icon={markerId === 1 ? PLACE_MAP_ICON_ACTIVE : PLACE_MAP_ICON}
          />
        ))}
      </Map>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Map = styled(MapContainer)`
  width: 100%;
  align-self: stretch;
`;

export default PlacesMap;
